'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5868<T> = T extends (infer U)[]
  ? DeepReadonlyArray5868<U>
  : T extends object
  ? DeepReadonlyObject5868<T>
  : T;

interface DeepReadonlyArray5868<T> extends ReadonlyArray<DeepReadonly5868<T>> {}

type DeepReadonlyObject5868<T> = {
  readonly [P in keyof T]: DeepReadonly5868<T[P]>;
};

type UnionToIntersection5868<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5868<T> = UnionToIntersection5868<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5868<T extends unknown[], V> = [...T, V];

type TuplifyUnion5868<T, L = LastOf5868<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5868<TuplifyUnion5868<Exclude<T, L>>, L>;

type DeepPartial5868<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5868<T[P]> }
  : T;

type Paths5868<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5868<K, Paths5868<T[K], Prev5868[D]>> : never }[keyof T]
  : never;

type Prev5868 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5868<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5868 {
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

type ConfigPaths5868 = Paths5868<NestedConfig5868>;

interface HeavyProps5868 {
  config: DeepPartial5868<NestedConfig5868>;
  path?: ConfigPaths5868;
}

const HeavyComponent5868 = memo(function HeavyComponent5868({ config }: HeavyProps5868) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5868) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5868 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5868: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5868.displayName = 'HeavyComponent5868';
export default HeavyComponent5868;
