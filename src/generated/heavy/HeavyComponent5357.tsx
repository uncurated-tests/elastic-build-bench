'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5357<T> = T extends (infer U)[]
  ? DeepReadonlyArray5357<U>
  : T extends object
  ? DeepReadonlyObject5357<T>
  : T;

interface DeepReadonlyArray5357<T> extends ReadonlyArray<DeepReadonly5357<T>> {}

type DeepReadonlyObject5357<T> = {
  readonly [P in keyof T]: DeepReadonly5357<T[P]>;
};

type UnionToIntersection5357<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5357<T> = UnionToIntersection5357<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5357<T extends unknown[], V> = [...T, V];

type TuplifyUnion5357<T, L = LastOf5357<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5357<TuplifyUnion5357<Exclude<T, L>>, L>;

type DeepPartial5357<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5357<T[P]> }
  : T;

type Paths5357<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5357<K, Paths5357<T[K], Prev5357[D]>> : never }[keyof T]
  : never;

type Prev5357 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5357<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5357 {
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

type ConfigPaths5357 = Paths5357<NestedConfig5357>;

interface HeavyProps5357 {
  config: DeepPartial5357<NestedConfig5357>;
  path?: ConfigPaths5357;
}

const HeavyComponent5357 = memo(function HeavyComponent5357({ config }: HeavyProps5357) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5357) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5357 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5357: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5357.displayName = 'HeavyComponent5357';
export default HeavyComponent5357;
