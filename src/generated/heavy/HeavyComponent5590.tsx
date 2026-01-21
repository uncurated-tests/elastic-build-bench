'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5590<T> = T extends (infer U)[]
  ? DeepReadonlyArray5590<U>
  : T extends object
  ? DeepReadonlyObject5590<T>
  : T;

interface DeepReadonlyArray5590<T> extends ReadonlyArray<DeepReadonly5590<T>> {}

type DeepReadonlyObject5590<T> = {
  readonly [P in keyof T]: DeepReadonly5590<T[P]>;
};

type UnionToIntersection5590<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5590<T> = UnionToIntersection5590<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5590<T extends unknown[], V> = [...T, V];

type TuplifyUnion5590<T, L = LastOf5590<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5590<TuplifyUnion5590<Exclude<T, L>>, L>;

type DeepPartial5590<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5590<T[P]> }
  : T;

type Paths5590<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5590<K, Paths5590<T[K], Prev5590[D]>> : never }[keyof T]
  : never;

type Prev5590 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5590<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5590 {
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

type ConfigPaths5590 = Paths5590<NestedConfig5590>;

interface HeavyProps5590 {
  config: DeepPartial5590<NestedConfig5590>;
  path?: ConfigPaths5590;
}

const HeavyComponent5590 = memo(function HeavyComponent5590({ config }: HeavyProps5590) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5590) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5590 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5590: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5590.displayName = 'HeavyComponent5590';
export default HeavyComponent5590;
