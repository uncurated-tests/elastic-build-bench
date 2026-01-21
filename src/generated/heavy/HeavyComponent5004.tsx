'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5004<T> = T extends (infer U)[]
  ? DeepReadonlyArray5004<U>
  : T extends object
  ? DeepReadonlyObject5004<T>
  : T;

interface DeepReadonlyArray5004<T> extends ReadonlyArray<DeepReadonly5004<T>> {}

type DeepReadonlyObject5004<T> = {
  readonly [P in keyof T]: DeepReadonly5004<T[P]>;
};

type UnionToIntersection5004<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5004<T> = UnionToIntersection5004<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5004<T extends unknown[], V> = [...T, V];

type TuplifyUnion5004<T, L = LastOf5004<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5004<TuplifyUnion5004<Exclude<T, L>>, L>;

type DeepPartial5004<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5004<T[P]> }
  : T;

type Paths5004<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5004<K, Paths5004<T[K], Prev5004[D]>> : never }[keyof T]
  : never;

type Prev5004 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5004<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5004 {
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

type ConfigPaths5004 = Paths5004<NestedConfig5004>;

interface HeavyProps5004 {
  config: DeepPartial5004<NestedConfig5004>;
  path?: ConfigPaths5004;
}

const HeavyComponent5004 = memo(function HeavyComponent5004({ config }: HeavyProps5004) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5004) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5004 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5004: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5004.displayName = 'HeavyComponent5004';
export default HeavyComponent5004;
