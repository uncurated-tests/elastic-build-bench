'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly456<T> = T extends (infer U)[]
  ? DeepReadonlyArray456<U>
  : T extends object
  ? DeepReadonlyObject456<T>
  : T;

interface DeepReadonlyArray456<T> extends ReadonlyArray<DeepReadonly456<T>> {}

type DeepReadonlyObject456<T> = {
  readonly [P in keyof T]: DeepReadonly456<T[P]>;
};

type UnionToIntersection456<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf456<T> = UnionToIntersection456<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push456<T extends unknown[], V> = [...T, V];

type TuplifyUnion456<T, L = LastOf456<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push456<TuplifyUnion456<Exclude<T, L>>, L>;

type DeepPartial456<T> = T extends object
  ? { [P in keyof T]?: DeepPartial456<T[P]> }
  : T;

type Paths456<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join456<K, Paths456<T[K], Prev456[D]>> : never }[keyof T]
  : never;

type Prev456 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join456<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig456 {
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

type ConfigPaths456 = Paths456<NestedConfig456>;

interface HeavyProps456 {
  config: DeepPartial456<NestedConfig456>;
  path?: ConfigPaths456;
}

const HeavyComponent456 = memo(function HeavyComponent456({ config }: HeavyProps456) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 456) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-456 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H456: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent456.displayName = 'HeavyComponent456';
export default HeavyComponent456;
