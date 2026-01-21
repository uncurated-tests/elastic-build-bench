'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5066<T> = T extends (infer U)[]
  ? DeepReadonlyArray5066<U>
  : T extends object
  ? DeepReadonlyObject5066<T>
  : T;

interface DeepReadonlyArray5066<T> extends ReadonlyArray<DeepReadonly5066<T>> {}

type DeepReadonlyObject5066<T> = {
  readonly [P in keyof T]: DeepReadonly5066<T[P]>;
};

type UnionToIntersection5066<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5066<T> = UnionToIntersection5066<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5066<T extends unknown[], V> = [...T, V];

type TuplifyUnion5066<T, L = LastOf5066<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5066<TuplifyUnion5066<Exclude<T, L>>, L>;

type DeepPartial5066<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5066<T[P]> }
  : T;

type Paths5066<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5066<K, Paths5066<T[K], Prev5066[D]>> : never }[keyof T]
  : never;

type Prev5066 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5066<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5066 {
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

type ConfigPaths5066 = Paths5066<NestedConfig5066>;

interface HeavyProps5066 {
  config: DeepPartial5066<NestedConfig5066>;
  path?: ConfigPaths5066;
}

const HeavyComponent5066 = memo(function HeavyComponent5066({ config }: HeavyProps5066) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5066) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5066 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5066: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5066.displayName = 'HeavyComponent5066';
export default HeavyComponent5066;
