'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5074<T> = T extends (infer U)[]
  ? DeepReadonlyArray5074<U>
  : T extends object
  ? DeepReadonlyObject5074<T>
  : T;

interface DeepReadonlyArray5074<T> extends ReadonlyArray<DeepReadonly5074<T>> {}

type DeepReadonlyObject5074<T> = {
  readonly [P in keyof T]: DeepReadonly5074<T[P]>;
};

type UnionToIntersection5074<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5074<T> = UnionToIntersection5074<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5074<T extends unknown[], V> = [...T, V];

type TuplifyUnion5074<T, L = LastOf5074<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5074<TuplifyUnion5074<Exclude<T, L>>, L>;

type DeepPartial5074<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5074<T[P]> }
  : T;

type Paths5074<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5074<K, Paths5074<T[K], Prev5074[D]>> : never }[keyof T]
  : never;

type Prev5074 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5074<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5074 {
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

type ConfigPaths5074 = Paths5074<NestedConfig5074>;

interface HeavyProps5074 {
  config: DeepPartial5074<NestedConfig5074>;
  path?: ConfigPaths5074;
}

const HeavyComponent5074 = memo(function HeavyComponent5074({ config }: HeavyProps5074) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5074) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5074 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5074: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5074.displayName = 'HeavyComponent5074';
export default HeavyComponent5074;
