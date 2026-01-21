'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5923<T> = T extends (infer U)[]
  ? DeepReadonlyArray5923<U>
  : T extends object
  ? DeepReadonlyObject5923<T>
  : T;

interface DeepReadonlyArray5923<T> extends ReadonlyArray<DeepReadonly5923<T>> {}

type DeepReadonlyObject5923<T> = {
  readonly [P in keyof T]: DeepReadonly5923<T[P]>;
};

type UnionToIntersection5923<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5923<T> = UnionToIntersection5923<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5923<T extends unknown[], V> = [...T, V];

type TuplifyUnion5923<T, L = LastOf5923<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5923<TuplifyUnion5923<Exclude<T, L>>, L>;

type DeepPartial5923<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5923<T[P]> }
  : T;

type Paths5923<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5923<K, Paths5923<T[K], Prev5923[D]>> : never }[keyof T]
  : never;

type Prev5923 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5923<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5923 {
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

type ConfigPaths5923 = Paths5923<NestedConfig5923>;

interface HeavyProps5923 {
  config: DeepPartial5923<NestedConfig5923>;
  path?: ConfigPaths5923;
}

const HeavyComponent5923 = memo(function HeavyComponent5923({ config }: HeavyProps5923) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5923) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5923 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5923: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5923.displayName = 'HeavyComponent5923';
export default HeavyComponent5923;
