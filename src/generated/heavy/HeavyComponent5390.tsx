'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5390<T> = T extends (infer U)[]
  ? DeepReadonlyArray5390<U>
  : T extends object
  ? DeepReadonlyObject5390<T>
  : T;

interface DeepReadonlyArray5390<T> extends ReadonlyArray<DeepReadonly5390<T>> {}

type DeepReadonlyObject5390<T> = {
  readonly [P in keyof T]: DeepReadonly5390<T[P]>;
};

type UnionToIntersection5390<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5390<T> = UnionToIntersection5390<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5390<T extends unknown[], V> = [...T, V];

type TuplifyUnion5390<T, L = LastOf5390<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5390<TuplifyUnion5390<Exclude<T, L>>, L>;

type DeepPartial5390<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5390<T[P]> }
  : T;

type Paths5390<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5390<K, Paths5390<T[K], Prev5390[D]>> : never }[keyof T]
  : never;

type Prev5390 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5390<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5390 {
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

type ConfigPaths5390 = Paths5390<NestedConfig5390>;

interface HeavyProps5390 {
  config: DeepPartial5390<NestedConfig5390>;
  path?: ConfigPaths5390;
}

const HeavyComponent5390 = memo(function HeavyComponent5390({ config }: HeavyProps5390) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5390) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5390 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5390: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5390.displayName = 'HeavyComponent5390';
export default HeavyComponent5390;
