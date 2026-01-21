'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2774<T> = T extends (infer U)[]
  ? DeepReadonlyArray2774<U>
  : T extends object
  ? DeepReadonlyObject2774<T>
  : T;

interface DeepReadonlyArray2774<T> extends ReadonlyArray<DeepReadonly2774<T>> {}

type DeepReadonlyObject2774<T> = {
  readonly [P in keyof T]: DeepReadonly2774<T[P]>;
};

type UnionToIntersection2774<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2774<T> = UnionToIntersection2774<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2774<T extends unknown[], V> = [...T, V];

type TuplifyUnion2774<T, L = LastOf2774<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2774<TuplifyUnion2774<Exclude<T, L>>, L>;

type DeepPartial2774<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2774<T[P]> }
  : T;

type Paths2774<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2774<K, Paths2774<T[K], Prev2774[D]>> : never }[keyof T]
  : never;

type Prev2774 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2774<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2774 {
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

type ConfigPaths2774 = Paths2774<NestedConfig2774>;

interface HeavyProps2774 {
  config: DeepPartial2774<NestedConfig2774>;
  path?: ConfigPaths2774;
}

const HeavyComponent2774 = memo(function HeavyComponent2774({ config }: HeavyProps2774) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2774) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2774 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2774: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2774.displayName = 'HeavyComponent2774';
export default HeavyComponent2774;
