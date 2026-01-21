'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5953<T> = T extends (infer U)[]
  ? DeepReadonlyArray5953<U>
  : T extends object
  ? DeepReadonlyObject5953<T>
  : T;

interface DeepReadonlyArray5953<T> extends ReadonlyArray<DeepReadonly5953<T>> {}

type DeepReadonlyObject5953<T> = {
  readonly [P in keyof T]: DeepReadonly5953<T[P]>;
};

type UnionToIntersection5953<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5953<T> = UnionToIntersection5953<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5953<T extends unknown[], V> = [...T, V];

type TuplifyUnion5953<T, L = LastOf5953<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5953<TuplifyUnion5953<Exclude<T, L>>, L>;

type DeepPartial5953<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5953<T[P]> }
  : T;

type Paths5953<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5953<K, Paths5953<T[K], Prev5953[D]>> : never }[keyof T]
  : never;

type Prev5953 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5953<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5953 {
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

type ConfigPaths5953 = Paths5953<NestedConfig5953>;

interface HeavyProps5953 {
  config: DeepPartial5953<NestedConfig5953>;
  path?: ConfigPaths5953;
}

const HeavyComponent5953 = memo(function HeavyComponent5953({ config }: HeavyProps5953) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5953) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5953 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5953: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5953.displayName = 'HeavyComponent5953';
export default HeavyComponent5953;
