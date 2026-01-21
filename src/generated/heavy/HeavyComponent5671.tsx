'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5671<T> = T extends (infer U)[]
  ? DeepReadonlyArray5671<U>
  : T extends object
  ? DeepReadonlyObject5671<T>
  : T;

interface DeepReadonlyArray5671<T> extends ReadonlyArray<DeepReadonly5671<T>> {}

type DeepReadonlyObject5671<T> = {
  readonly [P in keyof T]: DeepReadonly5671<T[P]>;
};

type UnionToIntersection5671<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5671<T> = UnionToIntersection5671<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5671<T extends unknown[], V> = [...T, V];

type TuplifyUnion5671<T, L = LastOf5671<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5671<TuplifyUnion5671<Exclude<T, L>>, L>;

type DeepPartial5671<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5671<T[P]> }
  : T;

type Paths5671<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5671<K, Paths5671<T[K], Prev5671[D]>> : never }[keyof T]
  : never;

type Prev5671 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5671<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5671 {
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

type ConfigPaths5671 = Paths5671<NestedConfig5671>;

interface HeavyProps5671 {
  config: DeepPartial5671<NestedConfig5671>;
  path?: ConfigPaths5671;
}

const HeavyComponent5671 = memo(function HeavyComponent5671({ config }: HeavyProps5671) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5671) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5671 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5671: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5671.displayName = 'HeavyComponent5671';
export default HeavyComponent5671;
