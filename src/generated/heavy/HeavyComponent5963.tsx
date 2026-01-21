'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5963<T> = T extends (infer U)[]
  ? DeepReadonlyArray5963<U>
  : T extends object
  ? DeepReadonlyObject5963<T>
  : T;

interface DeepReadonlyArray5963<T> extends ReadonlyArray<DeepReadonly5963<T>> {}

type DeepReadonlyObject5963<T> = {
  readonly [P in keyof T]: DeepReadonly5963<T[P]>;
};

type UnionToIntersection5963<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5963<T> = UnionToIntersection5963<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5963<T extends unknown[], V> = [...T, V];

type TuplifyUnion5963<T, L = LastOf5963<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5963<TuplifyUnion5963<Exclude<T, L>>, L>;

type DeepPartial5963<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5963<T[P]> }
  : T;

type Paths5963<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5963<K, Paths5963<T[K], Prev5963[D]>> : never }[keyof T]
  : never;

type Prev5963 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5963<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5963 {
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

type ConfigPaths5963 = Paths5963<NestedConfig5963>;

interface HeavyProps5963 {
  config: DeepPartial5963<NestedConfig5963>;
  path?: ConfigPaths5963;
}

const HeavyComponent5963 = memo(function HeavyComponent5963({ config }: HeavyProps5963) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5963) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5963 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5963: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5963.displayName = 'HeavyComponent5963';
export default HeavyComponent5963;
