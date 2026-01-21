'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5744<T> = T extends (infer U)[]
  ? DeepReadonlyArray5744<U>
  : T extends object
  ? DeepReadonlyObject5744<T>
  : T;

interface DeepReadonlyArray5744<T> extends ReadonlyArray<DeepReadonly5744<T>> {}

type DeepReadonlyObject5744<T> = {
  readonly [P in keyof T]: DeepReadonly5744<T[P]>;
};

type UnionToIntersection5744<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5744<T> = UnionToIntersection5744<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5744<T extends unknown[], V> = [...T, V];

type TuplifyUnion5744<T, L = LastOf5744<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5744<TuplifyUnion5744<Exclude<T, L>>, L>;

type DeepPartial5744<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5744<T[P]> }
  : T;

type Paths5744<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5744<K, Paths5744<T[K], Prev5744[D]>> : never }[keyof T]
  : never;

type Prev5744 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5744<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5744 {
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

type ConfigPaths5744 = Paths5744<NestedConfig5744>;

interface HeavyProps5744 {
  config: DeepPartial5744<NestedConfig5744>;
  path?: ConfigPaths5744;
}

const HeavyComponent5744 = memo(function HeavyComponent5744({ config }: HeavyProps5744) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5744) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5744 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5744: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5744.displayName = 'HeavyComponent5744';
export default HeavyComponent5744;
