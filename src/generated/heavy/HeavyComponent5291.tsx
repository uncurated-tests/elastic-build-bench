'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5291<T> = T extends (infer U)[]
  ? DeepReadonlyArray5291<U>
  : T extends object
  ? DeepReadonlyObject5291<T>
  : T;

interface DeepReadonlyArray5291<T> extends ReadonlyArray<DeepReadonly5291<T>> {}

type DeepReadonlyObject5291<T> = {
  readonly [P in keyof T]: DeepReadonly5291<T[P]>;
};

type UnionToIntersection5291<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5291<T> = UnionToIntersection5291<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5291<T extends unknown[], V> = [...T, V];

type TuplifyUnion5291<T, L = LastOf5291<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5291<TuplifyUnion5291<Exclude<T, L>>, L>;

type DeepPartial5291<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5291<T[P]> }
  : T;

type Paths5291<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5291<K, Paths5291<T[K], Prev5291[D]>> : never }[keyof T]
  : never;

type Prev5291 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5291<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5291 {
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

type ConfigPaths5291 = Paths5291<NestedConfig5291>;

interface HeavyProps5291 {
  config: DeepPartial5291<NestedConfig5291>;
  path?: ConfigPaths5291;
}

const HeavyComponent5291 = memo(function HeavyComponent5291({ config }: HeavyProps5291) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5291) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5291 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5291: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5291.displayName = 'HeavyComponent5291';
export default HeavyComponent5291;
