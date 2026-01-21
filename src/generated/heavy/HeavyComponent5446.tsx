'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5446<T> = T extends (infer U)[]
  ? DeepReadonlyArray5446<U>
  : T extends object
  ? DeepReadonlyObject5446<T>
  : T;

interface DeepReadonlyArray5446<T> extends ReadonlyArray<DeepReadonly5446<T>> {}

type DeepReadonlyObject5446<T> = {
  readonly [P in keyof T]: DeepReadonly5446<T[P]>;
};

type UnionToIntersection5446<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5446<T> = UnionToIntersection5446<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5446<T extends unknown[], V> = [...T, V];

type TuplifyUnion5446<T, L = LastOf5446<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5446<TuplifyUnion5446<Exclude<T, L>>, L>;

type DeepPartial5446<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5446<T[P]> }
  : T;

type Paths5446<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5446<K, Paths5446<T[K], Prev5446[D]>> : never }[keyof T]
  : never;

type Prev5446 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5446<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5446 {
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

type ConfigPaths5446 = Paths5446<NestedConfig5446>;

interface HeavyProps5446 {
  config: DeepPartial5446<NestedConfig5446>;
  path?: ConfigPaths5446;
}

const HeavyComponent5446 = memo(function HeavyComponent5446({ config }: HeavyProps5446) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5446) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5446 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5446: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5446.displayName = 'HeavyComponent5446';
export default HeavyComponent5446;
