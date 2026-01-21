'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5807<T> = T extends (infer U)[]
  ? DeepReadonlyArray5807<U>
  : T extends object
  ? DeepReadonlyObject5807<T>
  : T;

interface DeepReadonlyArray5807<T> extends ReadonlyArray<DeepReadonly5807<T>> {}

type DeepReadonlyObject5807<T> = {
  readonly [P in keyof T]: DeepReadonly5807<T[P]>;
};

type UnionToIntersection5807<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5807<T> = UnionToIntersection5807<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5807<T extends unknown[], V> = [...T, V];

type TuplifyUnion5807<T, L = LastOf5807<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5807<TuplifyUnion5807<Exclude<T, L>>, L>;

type DeepPartial5807<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5807<T[P]> }
  : T;

type Paths5807<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5807<K, Paths5807<T[K], Prev5807[D]>> : never }[keyof T]
  : never;

type Prev5807 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5807<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5807 {
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

type ConfigPaths5807 = Paths5807<NestedConfig5807>;

interface HeavyProps5807 {
  config: DeepPartial5807<NestedConfig5807>;
  path?: ConfigPaths5807;
}

const HeavyComponent5807 = memo(function HeavyComponent5807({ config }: HeavyProps5807) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5807) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5807 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5807: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5807.displayName = 'HeavyComponent5807';
export default HeavyComponent5807;
