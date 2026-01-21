'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5654<T> = T extends (infer U)[]
  ? DeepReadonlyArray5654<U>
  : T extends object
  ? DeepReadonlyObject5654<T>
  : T;

interface DeepReadonlyArray5654<T> extends ReadonlyArray<DeepReadonly5654<T>> {}

type DeepReadonlyObject5654<T> = {
  readonly [P in keyof T]: DeepReadonly5654<T[P]>;
};

type UnionToIntersection5654<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5654<T> = UnionToIntersection5654<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5654<T extends unknown[], V> = [...T, V];

type TuplifyUnion5654<T, L = LastOf5654<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5654<TuplifyUnion5654<Exclude<T, L>>, L>;

type DeepPartial5654<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5654<T[P]> }
  : T;

type Paths5654<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5654<K, Paths5654<T[K], Prev5654[D]>> : never }[keyof T]
  : never;

type Prev5654 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5654<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5654 {
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

type ConfigPaths5654 = Paths5654<NestedConfig5654>;

interface HeavyProps5654 {
  config: DeepPartial5654<NestedConfig5654>;
  path?: ConfigPaths5654;
}

const HeavyComponent5654 = memo(function HeavyComponent5654({ config }: HeavyProps5654) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5654) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5654 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5654: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5654.displayName = 'HeavyComponent5654';
export default HeavyComponent5654;
