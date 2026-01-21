'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5487<T> = T extends (infer U)[]
  ? DeepReadonlyArray5487<U>
  : T extends object
  ? DeepReadonlyObject5487<T>
  : T;

interface DeepReadonlyArray5487<T> extends ReadonlyArray<DeepReadonly5487<T>> {}

type DeepReadonlyObject5487<T> = {
  readonly [P in keyof T]: DeepReadonly5487<T[P]>;
};

type UnionToIntersection5487<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5487<T> = UnionToIntersection5487<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5487<T extends unknown[], V> = [...T, V];

type TuplifyUnion5487<T, L = LastOf5487<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5487<TuplifyUnion5487<Exclude<T, L>>, L>;

type DeepPartial5487<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5487<T[P]> }
  : T;

type Paths5487<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5487<K, Paths5487<T[K], Prev5487[D]>> : never }[keyof T]
  : never;

type Prev5487 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5487<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5487 {
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

type ConfigPaths5487 = Paths5487<NestedConfig5487>;

interface HeavyProps5487 {
  config: DeepPartial5487<NestedConfig5487>;
  path?: ConfigPaths5487;
}

const HeavyComponent5487 = memo(function HeavyComponent5487({ config }: HeavyProps5487) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5487) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5487 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5487: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5487.displayName = 'HeavyComponent5487';
export default HeavyComponent5487;
