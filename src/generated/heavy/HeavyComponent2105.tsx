'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2105<T> = T extends (infer U)[]
  ? DeepReadonlyArray2105<U>
  : T extends object
  ? DeepReadonlyObject2105<T>
  : T;

interface DeepReadonlyArray2105<T> extends ReadonlyArray<DeepReadonly2105<T>> {}

type DeepReadonlyObject2105<T> = {
  readonly [P in keyof T]: DeepReadonly2105<T[P]>;
};

type UnionToIntersection2105<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2105<T> = UnionToIntersection2105<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2105<T extends unknown[], V> = [...T, V];

type TuplifyUnion2105<T, L = LastOf2105<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2105<TuplifyUnion2105<Exclude<T, L>>, L>;

type DeepPartial2105<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2105<T[P]> }
  : T;

type Paths2105<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2105<K, Paths2105<T[K], Prev2105[D]>> : never }[keyof T]
  : never;

type Prev2105 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2105<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2105 {
  level1: {
    level2: {
      level3: {
        value: string;
        count: number;
        enabled: boolean;
        items: Array<{ id: number; name: string }>;
      };
    };
  };
}

type ConfigPaths2105 = Paths2105<NestedConfig2105>;

interface HeavyProps2105 {
  config: DeepPartial2105<NestedConfig2105>;
  path?: ConfigPaths2105;
}

const HeavyComponent2105 = memo(function HeavyComponent2105({ config }: HeavyProps2105) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2105) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2105 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2105: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2105.displayName = 'HeavyComponent2105';
export default HeavyComponent2105;
