'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5225<T> = T extends (infer U)[]
  ? DeepReadonlyArray5225<U>
  : T extends object
  ? DeepReadonlyObject5225<T>
  : T;

interface DeepReadonlyArray5225<T> extends ReadonlyArray<DeepReadonly5225<T>> {}

type DeepReadonlyObject5225<T> = {
  readonly [P in keyof T]: DeepReadonly5225<T[P]>;
};

type UnionToIntersection5225<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5225<T> = UnionToIntersection5225<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5225<T extends unknown[], V> = [...T, V];

type TuplifyUnion5225<T, L = LastOf5225<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5225<TuplifyUnion5225<Exclude<T, L>>, L>;

type DeepPartial5225<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5225<T[P]> }
  : T;

type Paths5225<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5225<K, Paths5225<T[K], Prev5225[D]>> : never }[keyof T]
  : never;

type Prev5225 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5225<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5225 {
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

type ConfigPaths5225 = Paths5225<NestedConfig5225>;

interface HeavyProps5225 {
  config: DeepPartial5225<NestedConfig5225>;
  path?: ConfigPaths5225;
}

const HeavyComponent5225 = memo(function HeavyComponent5225({ config }: HeavyProps5225) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5225) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5225 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5225: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5225.displayName = 'HeavyComponent5225';
export default HeavyComponent5225;
