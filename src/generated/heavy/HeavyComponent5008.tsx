'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5008<T> = T extends (infer U)[]
  ? DeepReadonlyArray5008<U>
  : T extends object
  ? DeepReadonlyObject5008<T>
  : T;

interface DeepReadonlyArray5008<T> extends ReadonlyArray<DeepReadonly5008<T>> {}

type DeepReadonlyObject5008<T> = {
  readonly [P in keyof T]: DeepReadonly5008<T[P]>;
};

type UnionToIntersection5008<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5008<T> = UnionToIntersection5008<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5008<T extends unknown[], V> = [...T, V];

type TuplifyUnion5008<T, L = LastOf5008<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5008<TuplifyUnion5008<Exclude<T, L>>, L>;

type DeepPartial5008<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5008<T[P]> }
  : T;

type Paths5008<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5008<K, Paths5008<T[K], Prev5008[D]>> : never }[keyof T]
  : never;

type Prev5008 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5008<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5008 {
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

type ConfigPaths5008 = Paths5008<NestedConfig5008>;

interface HeavyProps5008 {
  config: DeepPartial5008<NestedConfig5008>;
  path?: ConfigPaths5008;
}

const HeavyComponent5008 = memo(function HeavyComponent5008({ config }: HeavyProps5008) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5008) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5008 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5008: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5008.displayName = 'HeavyComponent5008';
export default HeavyComponent5008;
