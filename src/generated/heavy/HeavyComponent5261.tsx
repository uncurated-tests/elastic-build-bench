'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5261<T> = T extends (infer U)[]
  ? DeepReadonlyArray5261<U>
  : T extends object
  ? DeepReadonlyObject5261<T>
  : T;

interface DeepReadonlyArray5261<T> extends ReadonlyArray<DeepReadonly5261<T>> {}

type DeepReadonlyObject5261<T> = {
  readonly [P in keyof T]: DeepReadonly5261<T[P]>;
};

type UnionToIntersection5261<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5261<T> = UnionToIntersection5261<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5261<T extends unknown[], V> = [...T, V];

type TuplifyUnion5261<T, L = LastOf5261<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5261<TuplifyUnion5261<Exclude<T, L>>, L>;

type DeepPartial5261<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5261<T[P]> }
  : T;

type Paths5261<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5261<K, Paths5261<T[K], Prev5261[D]>> : never }[keyof T]
  : never;

type Prev5261 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5261<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5261 {
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

type ConfigPaths5261 = Paths5261<NestedConfig5261>;

interface HeavyProps5261 {
  config: DeepPartial5261<NestedConfig5261>;
  path?: ConfigPaths5261;
}

const HeavyComponent5261 = memo(function HeavyComponent5261({ config }: HeavyProps5261) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5261) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5261 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5261: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5261.displayName = 'HeavyComponent5261';
export default HeavyComponent5261;
