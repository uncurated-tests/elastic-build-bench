'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5297<T> = T extends (infer U)[]
  ? DeepReadonlyArray5297<U>
  : T extends object
  ? DeepReadonlyObject5297<T>
  : T;

interface DeepReadonlyArray5297<T> extends ReadonlyArray<DeepReadonly5297<T>> {}

type DeepReadonlyObject5297<T> = {
  readonly [P in keyof T]: DeepReadonly5297<T[P]>;
};

type UnionToIntersection5297<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5297<T> = UnionToIntersection5297<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5297<T extends unknown[], V> = [...T, V];

type TuplifyUnion5297<T, L = LastOf5297<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5297<TuplifyUnion5297<Exclude<T, L>>, L>;

type DeepPartial5297<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5297<T[P]> }
  : T;

type Paths5297<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5297<K, Paths5297<T[K], Prev5297[D]>> : never }[keyof T]
  : never;

type Prev5297 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5297<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5297 {
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

type ConfigPaths5297 = Paths5297<NestedConfig5297>;

interface HeavyProps5297 {
  config: DeepPartial5297<NestedConfig5297>;
  path?: ConfigPaths5297;
}

const HeavyComponent5297 = memo(function HeavyComponent5297({ config }: HeavyProps5297) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5297) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5297 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5297: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5297.displayName = 'HeavyComponent5297';
export default HeavyComponent5297;
