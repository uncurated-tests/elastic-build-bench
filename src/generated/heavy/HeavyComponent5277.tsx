'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5277<T> = T extends (infer U)[]
  ? DeepReadonlyArray5277<U>
  : T extends object
  ? DeepReadonlyObject5277<T>
  : T;

interface DeepReadonlyArray5277<T> extends ReadonlyArray<DeepReadonly5277<T>> {}

type DeepReadonlyObject5277<T> = {
  readonly [P in keyof T]: DeepReadonly5277<T[P]>;
};

type UnionToIntersection5277<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5277<T> = UnionToIntersection5277<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5277<T extends unknown[], V> = [...T, V];

type TuplifyUnion5277<T, L = LastOf5277<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5277<TuplifyUnion5277<Exclude<T, L>>, L>;

type DeepPartial5277<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5277<T[P]> }
  : T;

type Paths5277<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5277<K, Paths5277<T[K], Prev5277[D]>> : never }[keyof T]
  : never;

type Prev5277 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5277<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5277 {
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

type ConfigPaths5277 = Paths5277<NestedConfig5277>;

interface HeavyProps5277 {
  config: DeepPartial5277<NestedConfig5277>;
  path?: ConfigPaths5277;
}

const HeavyComponent5277 = memo(function HeavyComponent5277({ config }: HeavyProps5277) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5277) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5277 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5277: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5277.displayName = 'HeavyComponent5277';
export default HeavyComponent5277;
