'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5943<T> = T extends (infer U)[]
  ? DeepReadonlyArray5943<U>
  : T extends object
  ? DeepReadonlyObject5943<T>
  : T;

interface DeepReadonlyArray5943<T> extends ReadonlyArray<DeepReadonly5943<T>> {}

type DeepReadonlyObject5943<T> = {
  readonly [P in keyof T]: DeepReadonly5943<T[P]>;
};

type UnionToIntersection5943<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5943<T> = UnionToIntersection5943<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5943<T extends unknown[], V> = [...T, V];

type TuplifyUnion5943<T, L = LastOf5943<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5943<TuplifyUnion5943<Exclude<T, L>>, L>;

type DeepPartial5943<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5943<T[P]> }
  : T;

type Paths5943<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5943<K, Paths5943<T[K], Prev5943[D]>> : never }[keyof T]
  : never;

type Prev5943 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5943<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5943 {
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

type ConfigPaths5943 = Paths5943<NestedConfig5943>;

interface HeavyProps5943 {
  config: DeepPartial5943<NestedConfig5943>;
  path?: ConfigPaths5943;
}

const HeavyComponent5943 = memo(function HeavyComponent5943({ config }: HeavyProps5943) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5943) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5943 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5943: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5943.displayName = 'HeavyComponent5943';
export default HeavyComponent5943;
