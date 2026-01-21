'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5399<T> = T extends (infer U)[]
  ? DeepReadonlyArray5399<U>
  : T extends object
  ? DeepReadonlyObject5399<T>
  : T;

interface DeepReadonlyArray5399<T> extends ReadonlyArray<DeepReadonly5399<T>> {}

type DeepReadonlyObject5399<T> = {
  readonly [P in keyof T]: DeepReadonly5399<T[P]>;
};

type UnionToIntersection5399<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5399<T> = UnionToIntersection5399<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5399<T extends unknown[], V> = [...T, V];

type TuplifyUnion5399<T, L = LastOf5399<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5399<TuplifyUnion5399<Exclude<T, L>>, L>;

type DeepPartial5399<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5399<T[P]> }
  : T;

type Paths5399<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5399<K, Paths5399<T[K], Prev5399[D]>> : never }[keyof T]
  : never;

type Prev5399 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5399<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5399 {
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

type ConfigPaths5399 = Paths5399<NestedConfig5399>;

interface HeavyProps5399 {
  config: DeepPartial5399<NestedConfig5399>;
  path?: ConfigPaths5399;
}

const HeavyComponent5399 = memo(function HeavyComponent5399({ config }: HeavyProps5399) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5399) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5399 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5399: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5399.displayName = 'HeavyComponent5399';
export default HeavyComponent5399;
