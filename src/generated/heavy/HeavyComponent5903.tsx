'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5903<T> = T extends (infer U)[]
  ? DeepReadonlyArray5903<U>
  : T extends object
  ? DeepReadonlyObject5903<T>
  : T;

interface DeepReadonlyArray5903<T> extends ReadonlyArray<DeepReadonly5903<T>> {}

type DeepReadonlyObject5903<T> = {
  readonly [P in keyof T]: DeepReadonly5903<T[P]>;
};

type UnionToIntersection5903<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5903<T> = UnionToIntersection5903<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5903<T extends unknown[], V> = [...T, V];

type TuplifyUnion5903<T, L = LastOf5903<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5903<TuplifyUnion5903<Exclude<T, L>>, L>;

type DeepPartial5903<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5903<T[P]> }
  : T;

type Paths5903<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5903<K, Paths5903<T[K], Prev5903[D]>> : never }[keyof T]
  : never;

type Prev5903 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5903<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5903 {
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

type ConfigPaths5903 = Paths5903<NestedConfig5903>;

interface HeavyProps5903 {
  config: DeepPartial5903<NestedConfig5903>;
  path?: ConfigPaths5903;
}

const HeavyComponent5903 = memo(function HeavyComponent5903({ config }: HeavyProps5903) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5903) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5903 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5903: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5903.displayName = 'HeavyComponent5903';
export default HeavyComponent5903;
