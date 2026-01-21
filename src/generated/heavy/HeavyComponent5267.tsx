'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5267<T> = T extends (infer U)[]
  ? DeepReadonlyArray5267<U>
  : T extends object
  ? DeepReadonlyObject5267<T>
  : T;

interface DeepReadonlyArray5267<T> extends ReadonlyArray<DeepReadonly5267<T>> {}

type DeepReadonlyObject5267<T> = {
  readonly [P in keyof T]: DeepReadonly5267<T[P]>;
};

type UnionToIntersection5267<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5267<T> = UnionToIntersection5267<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5267<T extends unknown[], V> = [...T, V];

type TuplifyUnion5267<T, L = LastOf5267<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5267<TuplifyUnion5267<Exclude<T, L>>, L>;

type DeepPartial5267<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5267<T[P]> }
  : T;

type Paths5267<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5267<K, Paths5267<T[K], Prev5267[D]>> : never }[keyof T]
  : never;

type Prev5267 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5267<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5267 {
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

type ConfigPaths5267 = Paths5267<NestedConfig5267>;

interface HeavyProps5267 {
  config: DeepPartial5267<NestedConfig5267>;
  path?: ConfigPaths5267;
}

const HeavyComponent5267 = memo(function HeavyComponent5267({ config }: HeavyProps5267) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5267) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5267 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5267: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5267.displayName = 'HeavyComponent5267';
export default HeavyComponent5267;
