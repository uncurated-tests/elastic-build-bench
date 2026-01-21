'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5002<T> = T extends (infer U)[]
  ? DeepReadonlyArray5002<U>
  : T extends object
  ? DeepReadonlyObject5002<T>
  : T;

interface DeepReadonlyArray5002<T> extends ReadonlyArray<DeepReadonly5002<T>> {}

type DeepReadonlyObject5002<T> = {
  readonly [P in keyof T]: DeepReadonly5002<T[P]>;
};

type UnionToIntersection5002<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5002<T> = UnionToIntersection5002<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5002<T extends unknown[], V> = [...T, V];

type TuplifyUnion5002<T, L = LastOf5002<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5002<TuplifyUnion5002<Exclude<T, L>>, L>;

type DeepPartial5002<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5002<T[P]> }
  : T;

type Paths5002<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5002<K, Paths5002<T[K], Prev5002[D]>> : never }[keyof T]
  : never;

type Prev5002 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5002<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5002 {
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

type ConfigPaths5002 = Paths5002<NestedConfig5002>;

interface HeavyProps5002 {
  config: DeepPartial5002<NestedConfig5002>;
  path?: ConfigPaths5002;
}

const HeavyComponent5002 = memo(function HeavyComponent5002({ config }: HeavyProps5002) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5002) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5002 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5002: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5002.displayName = 'HeavyComponent5002';
export default HeavyComponent5002;
