'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5925<T> = T extends (infer U)[]
  ? DeepReadonlyArray5925<U>
  : T extends object
  ? DeepReadonlyObject5925<T>
  : T;

interface DeepReadonlyArray5925<T> extends ReadonlyArray<DeepReadonly5925<T>> {}

type DeepReadonlyObject5925<T> = {
  readonly [P in keyof T]: DeepReadonly5925<T[P]>;
};

type UnionToIntersection5925<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5925<T> = UnionToIntersection5925<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5925<T extends unknown[], V> = [...T, V];

type TuplifyUnion5925<T, L = LastOf5925<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5925<TuplifyUnion5925<Exclude<T, L>>, L>;

type DeepPartial5925<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5925<T[P]> }
  : T;

type Paths5925<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5925<K, Paths5925<T[K], Prev5925[D]>> : never }[keyof T]
  : never;

type Prev5925 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5925<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5925 {
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

type ConfigPaths5925 = Paths5925<NestedConfig5925>;

interface HeavyProps5925 {
  config: DeepPartial5925<NestedConfig5925>;
  path?: ConfigPaths5925;
}

const HeavyComponent5925 = memo(function HeavyComponent5925({ config }: HeavyProps5925) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5925) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5925 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5925: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5925.displayName = 'HeavyComponent5925';
export default HeavyComponent5925;
