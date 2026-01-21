'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5021<T> = T extends (infer U)[]
  ? DeepReadonlyArray5021<U>
  : T extends object
  ? DeepReadonlyObject5021<T>
  : T;

interface DeepReadonlyArray5021<T> extends ReadonlyArray<DeepReadonly5021<T>> {}

type DeepReadonlyObject5021<T> = {
  readonly [P in keyof T]: DeepReadonly5021<T[P]>;
};

type UnionToIntersection5021<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5021<T> = UnionToIntersection5021<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5021<T extends unknown[], V> = [...T, V];

type TuplifyUnion5021<T, L = LastOf5021<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5021<TuplifyUnion5021<Exclude<T, L>>, L>;

type DeepPartial5021<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5021<T[P]> }
  : T;

type Paths5021<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5021<K, Paths5021<T[K], Prev5021[D]>> : never }[keyof T]
  : never;

type Prev5021 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5021<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5021 {
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

type ConfigPaths5021 = Paths5021<NestedConfig5021>;

interface HeavyProps5021 {
  config: DeepPartial5021<NestedConfig5021>;
  path?: ConfigPaths5021;
}

const HeavyComponent5021 = memo(function HeavyComponent5021({ config }: HeavyProps5021) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5021) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5021 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5021: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5021.displayName = 'HeavyComponent5021';
export default HeavyComponent5021;
