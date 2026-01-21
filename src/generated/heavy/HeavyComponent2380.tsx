'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2380<T> = T extends (infer U)[]
  ? DeepReadonlyArray2380<U>
  : T extends object
  ? DeepReadonlyObject2380<T>
  : T;

interface DeepReadonlyArray2380<T> extends ReadonlyArray<DeepReadonly2380<T>> {}

type DeepReadonlyObject2380<T> = {
  readonly [P in keyof T]: DeepReadonly2380<T[P]>;
};

type UnionToIntersection2380<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2380<T> = UnionToIntersection2380<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2380<T extends unknown[], V> = [...T, V];

type TuplifyUnion2380<T, L = LastOf2380<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2380<TuplifyUnion2380<Exclude<T, L>>, L>;

type DeepPartial2380<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2380<T[P]> }
  : T;

type Paths2380<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2380<K, Paths2380<T[K], Prev2380[D]>> : never }[keyof T]
  : never;

type Prev2380 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2380<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2380 {
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

type ConfigPaths2380 = Paths2380<NestedConfig2380>;

interface HeavyProps2380 {
  config: DeepPartial2380<NestedConfig2380>;
  path?: ConfigPaths2380;
}

const HeavyComponent2380 = memo(function HeavyComponent2380({ config }: HeavyProps2380) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2380) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2380 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2380: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2380.displayName = 'HeavyComponent2380';
export default HeavyComponent2380;
