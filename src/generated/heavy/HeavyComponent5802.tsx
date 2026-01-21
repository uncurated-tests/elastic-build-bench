'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5802<T> = T extends (infer U)[]
  ? DeepReadonlyArray5802<U>
  : T extends object
  ? DeepReadonlyObject5802<T>
  : T;

interface DeepReadonlyArray5802<T> extends ReadonlyArray<DeepReadonly5802<T>> {}

type DeepReadonlyObject5802<T> = {
  readonly [P in keyof T]: DeepReadonly5802<T[P]>;
};

type UnionToIntersection5802<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5802<T> = UnionToIntersection5802<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5802<T extends unknown[], V> = [...T, V];

type TuplifyUnion5802<T, L = LastOf5802<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5802<TuplifyUnion5802<Exclude<T, L>>, L>;

type DeepPartial5802<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5802<T[P]> }
  : T;

type Paths5802<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5802<K, Paths5802<T[K], Prev5802[D]>> : never }[keyof T]
  : never;

type Prev5802 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5802<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5802 {
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

type ConfigPaths5802 = Paths5802<NestedConfig5802>;

interface HeavyProps5802 {
  config: DeepPartial5802<NestedConfig5802>;
  path?: ConfigPaths5802;
}

const HeavyComponent5802 = memo(function HeavyComponent5802({ config }: HeavyProps5802) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5802) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5802 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5802: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5802.displayName = 'HeavyComponent5802';
export default HeavyComponent5802;
