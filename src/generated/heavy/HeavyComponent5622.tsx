'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5622<T> = T extends (infer U)[]
  ? DeepReadonlyArray5622<U>
  : T extends object
  ? DeepReadonlyObject5622<T>
  : T;

interface DeepReadonlyArray5622<T> extends ReadonlyArray<DeepReadonly5622<T>> {}

type DeepReadonlyObject5622<T> = {
  readonly [P in keyof T]: DeepReadonly5622<T[P]>;
};

type UnionToIntersection5622<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5622<T> = UnionToIntersection5622<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5622<T extends unknown[], V> = [...T, V];

type TuplifyUnion5622<T, L = LastOf5622<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5622<TuplifyUnion5622<Exclude<T, L>>, L>;

type DeepPartial5622<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5622<T[P]> }
  : T;

type Paths5622<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5622<K, Paths5622<T[K], Prev5622[D]>> : never }[keyof T]
  : never;

type Prev5622 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5622<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5622 {
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

type ConfigPaths5622 = Paths5622<NestedConfig5622>;

interface HeavyProps5622 {
  config: DeepPartial5622<NestedConfig5622>;
  path?: ConfigPaths5622;
}

const HeavyComponent5622 = memo(function HeavyComponent5622({ config }: HeavyProps5622) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5622) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5622 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5622: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5622.displayName = 'HeavyComponent5622';
export default HeavyComponent5622;
