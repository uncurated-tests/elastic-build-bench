'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5391<T> = T extends (infer U)[]
  ? DeepReadonlyArray5391<U>
  : T extends object
  ? DeepReadonlyObject5391<T>
  : T;

interface DeepReadonlyArray5391<T> extends ReadonlyArray<DeepReadonly5391<T>> {}

type DeepReadonlyObject5391<T> = {
  readonly [P in keyof T]: DeepReadonly5391<T[P]>;
};

type UnionToIntersection5391<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5391<T> = UnionToIntersection5391<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5391<T extends unknown[], V> = [...T, V];

type TuplifyUnion5391<T, L = LastOf5391<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5391<TuplifyUnion5391<Exclude<T, L>>, L>;

type DeepPartial5391<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5391<T[P]> }
  : T;

type Paths5391<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5391<K, Paths5391<T[K], Prev5391[D]>> : never }[keyof T]
  : never;

type Prev5391 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5391<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5391 {
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

type ConfigPaths5391 = Paths5391<NestedConfig5391>;

interface HeavyProps5391 {
  config: DeepPartial5391<NestedConfig5391>;
  path?: ConfigPaths5391;
}

const HeavyComponent5391 = memo(function HeavyComponent5391({ config }: HeavyProps5391) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5391) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5391 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5391: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5391.displayName = 'HeavyComponent5391';
export default HeavyComponent5391;
