'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5109<T> = T extends (infer U)[]
  ? DeepReadonlyArray5109<U>
  : T extends object
  ? DeepReadonlyObject5109<T>
  : T;

interface DeepReadonlyArray5109<T> extends ReadonlyArray<DeepReadonly5109<T>> {}

type DeepReadonlyObject5109<T> = {
  readonly [P in keyof T]: DeepReadonly5109<T[P]>;
};

type UnionToIntersection5109<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5109<T> = UnionToIntersection5109<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5109<T extends unknown[], V> = [...T, V];

type TuplifyUnion5109<T, L = LastOf5109<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5109<TuplifyUnion5109<Exclude<T, L>>, L>;

type DeepPartial5109<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5109<T[P]> }
  : T;

type Paths5109<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5109<K, Paths5109<T[K], Prev5109[D]>> : never }[keyof T]
  : never;

type Prev5109 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5109<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5109 {
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

type ConfigPaths5109 = Paths5109<NestedConfig5109>;

interface HeavyProps5109 {
  config: DeepPartial5109<NestedConfig5109>;
  path?: ConfigPaths5109;
}

const HeavyComponent5109 = memo(function HeavyComponent5109({ config }: HeavyProps5109) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5109) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5109 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5109: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5109.displayName = 'HeavyComponent5109';
export default HeavyComponent5109;
