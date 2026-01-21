'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5188<T> = T extends (infer U)[]
  ? DeepReadonlyArray5188<U>
  : T extends object
  ? DeepReadonlyObject5188<T>
  : T;

interface DeepReadonlyArray5188<T> extends ReadonlyArray<DeepReadonly5188<T>> {}

type DeepReadonlyObject5188<T> = {
  readonly [P in keyof T]: DeepReadonly5188<T[P]>;
};

type UnionToIntersection5188<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5188<T> = UnionToIntersection5188<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5188<T extends unknown[], V> = [...T, V];

type TuplifyUnion5188<T, L = LastOf5188<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5188<TuplifyUnion5188<Exclude<T, L>>, L>;

type DeepPartial5188<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5188<T[P]> }
  : T;

type Paths5188<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5188<K, Paths5188<T[K], Prev5188[D]>> : never }[keyof T]
  : never;

type Prev5188 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5188<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5188 {
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

type ConfigPaths5188 = Paths5188<NestedConfig5188>;

interface HeavyProps5188 {
  config: DeepPartial5188<NestedConfig5188>;
  path?: ConfigPaths5188;
}

const HeavyComponent5188 = memo(function HeavyComponent5188({ config }: HeavyProps5188) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5188) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5188 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5188: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5188.displayName = 'HeavyComponent5188';
export default HeavyComponent5188;
