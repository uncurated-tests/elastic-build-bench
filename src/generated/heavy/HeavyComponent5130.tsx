'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5130<T> = T extends (infer U)[]
  ? DeepReadonlyArray5130<U>
  : T extends object
  ? DeepReadonlyObject5130<T>
  : T;

interface DeepReadonlyArray5130<T> extends ReadonlyArray<DeepReadonly5130<T>> {}

type DeepReadonlyObject5130<T> = {
  readonly [P in keyof T]: DeepReadonly5130<T[P]>;
};

type UnionToIntersection5130<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5130<T> = UnionToIntersection5130<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5130<T extends unknown[], V> = [...T, V];

type TuplifyUnion5130<T, L = LastOf5130<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5130<TuplifyUnion5130<Exclude<T, L>>, L>;

type DeepPartial5130<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5130<T[P]> }
  : T;

type Paths5130<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5130<K, Paths5130<T[K], Prev5130[D]>> : never }[keyof T]
  : never;

type Prev5130 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5130<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5130 {
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

type ConfigPaths5130 = Paths5130<NestedConfig5130>;

interface HeavyProps5130 {
  config: DeepPartial5130<NestedConfig5130>;
  path?: ConfigPaths5130;
}

const HeavyComponent5130 = memo(function HeavyComponent5130({ config }: HeavyProps5130) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5130) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5130 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5130: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5130.displayName = 'HeavyComponent5130';
export default HeavyComponent5130;
