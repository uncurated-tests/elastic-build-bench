'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2280<T> = T extends (infer U)[]
  ? DeepReadonlyArray2280<U>
  : T extends object
  ? DeepReadonlyObject2280<T>
  : T;

interface DeepReadonlyArray2280<T> extends ReadonlyArray<DeepReadonly2280<T>> {}

type DeepReadonlyObject2280<T> = {
  readonly [P in keyof T]: DeepReadonly2280<T[P]>;
};

type UnionToIntersection2280<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2280<T> = UnionToIntersection2280<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2280<T extends unknown[], V> = [...T, V];

type TuplifyUnion2280<T, L = LastOf2280<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2280<TuplifyUnion2280<Exclude<T, L>>, L>;

type DeepPartial2280<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2280<T[P]> }
  : T;

type Paths2280<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2280<K, Paths2280<T[K], Prev2280[D]>> : never }[keyof T]
  : never;

type Prev2280 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2280<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2280 {
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

type ConfigPaths2280 = Paths2280<NestedConfig2280>;

interface HeavyProps2280 {
  config: DeepPartial2280<NestedConfig2280>;
  path?: ConfigPaths2280;
}

const HeavyComponent2280 = memo(function HeavyComponent2280({ config }: HeavyProps2280) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2280) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2280 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2280: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2280.displayName = 'HeavyComponent2280';
export default HeavyComponent2280;
