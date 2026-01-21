'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5784<T> = T extends (infer U)[]
  ? DeepReadonlyArray5784<U>
  : T extends object
  ? DeepReadonlyObject5784<T>
  : T;

interface DeepReadonlyArray5784<T> extends ReadonlyArray<DeepReadonly5784<T>> {}

type DeepReadonlyObject5784<T> = {
  readonly [P in keyof T]: DeepReadonly5784<T[P]>;
};

type UnionToIntersection5784<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5784<T> = UnionToIntersection5784<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5784<T extends unknown[], V> = [...T, V];

type TuplifyUnion5784<T, L = LastOf5784<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5784<TuplifyUnion5784<Exclude<T, L>>, L>;

type DeepPartial5784<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5784<T[P]> }
  : T;

type Paths5784<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5784<K, Paths5784<T[K], Prev5784[D]>> : never }[keyof T]
  : never;

type Prev5784 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5784<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5784 {
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

type ConfigPaths5784 = Paths5784<NestedConfig5784>;

interface HeavyProps5784 {
  config: DeepPartial5784<NestedConfig5784>;
  path?: ConfigPaths5784;
}

const HeavyComponent5784 = memo(function HeavyComponent5784({ config }: HeavyProps5784) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5784) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5784 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5784: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5784.displayName = 'HeavyComponent5784';
export default HeavyComponent5784;
