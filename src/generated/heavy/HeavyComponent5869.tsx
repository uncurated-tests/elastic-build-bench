'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5869<T> = T extends (infer U)[]
  ? DeepReadonlyArray5869<U>
  : T extends object
  ? DeepReadonlyObject5869<T>
  : T;

interface DeepReadonlyArray5869<T> extends ReadonlyArray<DeepReadonly5869<T>> {}

type DeepReadonlyObject5869<T> = {
  readonly [P in keyof T]: DeepReadonly5869<T[P]>;
};

type UnionToIntersection5869<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5869<T> = UnionToIntersection5869<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5869<T extends unknown[], V> = [...T, V];

type TuplifyUnion5869<T, L = LastOf5869<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5869<TuplifyUnion5869<Exclude<T, L>>, L>;

type DeepPartial5869<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5869<T[P]> }
  : T;

type Paths5869<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5869<K, Paths5869<T[K], Prev5869[D]>> : never }[keyof T]
  : never;

type Prev5869 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5869<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5869 {
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

type ConfigPaths5869 = Paths5869<NestedConfig5869>;

interface HeavyProps5869 {
  config: DeepPartial5869<NestedConfig5869>;
  path?: ConfigPaths5869;
}

const HeavyComponent5869 = memo(function HeavyComponent5869({ config }: HeavyProps5869) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5869) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5869 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5869: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5869.displayName = 'HeavyComponent5869';
export default HeavyComponent5869;
