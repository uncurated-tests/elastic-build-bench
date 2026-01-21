'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5464<T> = T extends (infer U)[]
  ? DeepReadonlyArray5464<U>
  : T extends object
  ? DeepReadonlyObject5464<T>
  : T;

interface DeepReadonlyArray5464<T> extends ReadonlyArray<DeepReadonly5464<T>> {}

type DeepReadonlyObject5464<T> = {
  readonly [P in keyof T]: DeepReadonly5464<T[P]>;
};

type UnionToIntersection5464<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5464<T> = UnionToIntersection5464<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5464<T extends unknown[], V> = [...T, V];

type TuplifyUnion5464<T, L = LastOf5464<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5464<TuplifyUnion5464<Exclude<T, L>>, L>;

type DeepPartial5464<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5464<T[P]> }
  : T;

type Paths5464<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5464<K, Paths5464<T[K], Prev5464[D]>> : never }[keyof T]
  : never;

type Prev5464 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5464<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5464 {
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

type ConfigPaths5464 = Paths5464<NestedConfig5464>;

interface HeavyProps5464 {
  config: DeepPartial5464<NestedConfig5464>;
  path?: ConfigPaths5464;
}

const HeavyComponent5464 = memo(function HeavyComponent5464({ config }: HeavyProps5464) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5464) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5464 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5464: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5464.displayName = 'HeavyComponent5464';
export default HeavyComponent5464;
