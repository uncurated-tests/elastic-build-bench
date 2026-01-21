'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5828<T> = T extends (infer U)[]
  ? DeepReadonlyArray5828<U>
  : T extends object
  ? DeepReadonlyObject5828<T>
  : T;

interface DeepReadonlyArray5828<T> extends ReadonlyArray<DeepReadonly5828<T>> {}

type DeepReadonlyObject5828<T> = {
  readonly [P in keyof T]: DeepReadonly5828<T[P]>;
};

type UnionToIntersection5828<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5828<T> = UnionToIntersection5828<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5828<T extends unknown[], V> = [...T, V];

type TuplifyUnion5828<T, L = LastOf5828<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5828<TuplifyUnion5828<Exclude<T, L>>, L>;

type DeepPartial5828<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5828<T[P]> }
  : T;

type Paths5828<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5828<K, Paths5828<T[K], Prev5828[D]>> : never }[keyof T]
  : never;

type Prev5828 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5828<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5828 {
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

type ConfigPaths5828 = Paths5828<NestedConfig5828>;

interface HeavyProps5828 {
  config: DeepPartial5828<NestedConfig5828>;
  path?: ConfigPaths5828;
}

const HeavyComponent5828 = memo(function HeavyComponent5828({ config }: HeavyProps5828) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5828) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5828 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5828: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5828.displayName = 'HeavyComponent5828';
export default HeavyComponent5828;
