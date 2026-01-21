'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5786<T> = T extends (infer U)[]
  ? DeepReadonlyArray5786<U>
  : T extends object
  ? DeepReadonlyObject5786<T>
  : T;

interface DeepReadonlyArray5786<T> extends ReadonlyArray<DeepReadonly5786<T>> {}

type DeepReadonlyObject5786<T> = {
  readonly [P in keyof T]: DeepReadonly5786<T[P]>;
};

type UnionToIntersection5786<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5786<T> = UnionToIntersection5786<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5786<T extends unknown[], V> = [...T, V];

type TuplifyUnion5786<T, L = LastOf5786<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5786<TuplifyUnion5786<Exclude<T, L>>, L>;

type DeepPartial5786<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5786<T[P]> }
  : T;

type Paths5786<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5786<K, Paths5786<T[K], Prev5786[D]>> : never }[keyof T]
  : never;

type Prev5786 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5786<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5786 {
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

type ConfigPaths5786 = Paths5786<NestedConfig5786>;

interface HeavyProps5786 {
  config: DeepPartial5786<NestedConfig5786>;
  path?: ConfigPaths5786;
}

const HeavyComponent5786 = memo(function HeavyComponent5786({ config }: HeavyProps5786) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5786) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5786 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5786: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5786.displayName = 'HeavyComponent5786';
export default HeavyComponent5786;
