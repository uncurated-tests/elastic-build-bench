'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5661<T> = T extends (infer U)[]
  ? DeepReadonlyArray5661<U>
  : T extends object
  ? DeepReadonlyObject5661<T>
  : T;

interface DeepReadonlyArray5661<T> extends ReadonlyArray<DeepReadonly5661<T>> {}

type DeepReadonlyObject5661<T> = {
  readonly [P in keyof T]: DeepReadonly5661<T[P]>;
};

type UnionToIntersection5661<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5661<T> = UnionToIntersection5661<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5661<T extends unknown[], V> = [...T, V];

type TuplifyUnion5661<T, L = LastOf5661<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5661<TuplifyUnion5661<Exclude<T, L>>, L>;

type DeepPartial5661<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5661<T[P]> }
  : T;

type Paths5661<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5661<K, Paths5661<T[K], Prev5661[D]>> : never }[keyof T]
  : never;

type Prev5661 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5661<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5661 {
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

type ConfigPaths5661 = Paths5661<NestedConfig5661>;

interface HeavyProps5661 {
  config: DeepPartial5661<NestedConfig5661>;
  path?: ConfigPaths5661;
}

const HeavyComponent5661 = memo(function HeavyComponent5661({ config }: HeavyProps5661) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5661) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5661 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5661: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5661.displayName = 'HeavyComponent5661';
export default HeavyComponent5661;
