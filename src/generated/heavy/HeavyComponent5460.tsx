'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5460<T> = T extends (infer U)[]
  ? DeepReadonlyArray5460<U>
  : T extends object
  ? DeepReadonlyObject5460<T>
  : T;

interface DeepReadonlyArray5460<T> extends ReadonlyArray<DeepReadonly5460<T>> {}

type DeepReadonlyObject5460<T> = {
  readonly [P in keyof T]: DeepReadonly5460<T[P]>;
};

type UnionToIntersection5460<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5460<T> = UnionToIntersection5460<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5460<T extends unknown[], V> = [...T, V];

type TuplifyUnion5460<T, L = LastOf5460<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5460<TuplifyUnion5460<Exclude<T, L>>, L>;

type DeepPartial5460<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5460<T[P]> }
  : T;

type Paths5460<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5460<K, Paths5460<T[K], Prev5460[D]>> : never }[keyof T]
  : never;

type Prev5460 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5460<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5460 {
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

type ConfigPaths5460 = Paths5460<NestedConfig5460>;

interface HeavyProps5460 {
  config: DeepPartial5460<NestedConfig5460>;
  path?: ConfigPaths5460;
}

const HeavyComponent5460 = memo(function HeavyComponent5460({ config }: HeavyProps5460) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5460) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5460 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5460: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5460.displayName = 'HeavyComponent5460';
export default HeavyComponent5460;
