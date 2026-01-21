'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2352<T> = T extends (infer U)[]
  ? DeepReadonlyArray2352<U>
  : T extends object
  ? DeepReadonlyObject2352<T>
  : T;

interface DeepReadonlyArray2352<T> extends ReadonlyArray<DeepReadonly2352<T>> {}

type DeepReadonlyObject2352<T> = {
  readonly [P in keyof T]: DeepReadonly2352<T[P]>;
};

type UnionToIntersection2352<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2352<T> = UnionToIntersection2352<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2352<T extends unknown[], V> = [...T, V];

type TuplifyUnion2352<T, L = LastOf2352<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2352<TuplifyUnion2352<Exclude<T, L>>, L>;

type DeepPartial2352<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2352<T[P]> }
  : T;

type Paths2352<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2352<K, Paths2352<T[K], Prev2352[D]>> : never }[keyof T]
  : never;

type Prev2352 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2352<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2352 {
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

type ConfigPaths2352 = Paths2352<NestedConfig2352>;

interface HeavyProps2352 {
  config: DeepPartial2352<NestedConfig2352>;
  path?: ConfigPaths2352;
}

const HeavyComponent2352 = memo(function HeavyComponent2352({ config }: HeavyProps2352) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2352) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2352 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2352: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2352.displayName = 'HeavyComponent2352';
export default HeavyComponent2352;
