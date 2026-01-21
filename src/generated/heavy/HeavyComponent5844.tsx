'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5844<T> = T extends (infer U)[]
  ? DeepReadonlyArray5844<U>
  : T extends object
  ? DeepReadonlyObject5844<T>
  : T;

interface DeepReadonlyArray5844<T> extends ReadonlyArray<DeepReadonly5844<T>> {}

type DeepReadonlyObject5844<T> = {
  readonly [P in keyof T]: DeepReadonly5844<T[P]>;
};

type UnionToIntersection5844<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5844<T> = UnionToIntersection5844<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5844<T extends unknown[], V> = [...T, V];

type TuplifyUnion5844<T, L = LastOf5844<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5844<TuplifyUnion5844<Exclude<T, L>>, L>;

type DeepPartial5844<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5844<T[P]> }
  : T;

type Paths5844<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5844<K, Paths5844<T[K], Prev5844[D]>> : never }[keyof T]
  : never;

type Prev5844 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5844<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5844 {
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

type ConfigPaths5844 = Paths5844<NestedConfig5844>;

interface HeavyProps5844 {
  config: DeepPartial5844<NestedConfig5844>;
  path?: ConfigPaths5844;
}

const HeavyComponent5844 = memo(function HeavyComponent5844({ config }: HeavyProps5844) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5844) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5844 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5844: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5844.displayName = 'HeavyComponent5844';
export default HeavyComponent5844;
