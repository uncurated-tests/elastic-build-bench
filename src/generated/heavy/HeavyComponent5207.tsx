'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5207<T> = T extends (infer U)[]
  ? DeepReadonlyArray5207<U>
  : T extends object
  ? DeepReadonlyObject5207<T>
  : T;

interface DeepReadonlyArray5207<T> extends ReadonlyArray<DeepReadonly5207<T>> {}

type DeepReadonlyObject5207<T> = {
  readonly [P in keyof T]: DeepReadonly5207<T[P]>;
};

type UnionToIntersection5207<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5207<T> = UnionToIntersection5207<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5207<T extends unknown[], V> = [...T, V];

type TuplifyUnion5207<T, L = LastOf5207<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5207<TuplifyUnion5207<Exclude<T, L>>, L>;

type DeepPartial5207<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5207<T[P]> }
  : T;

type Paths5207<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5207<K, Paths5207<T[K], Prev5207[D]>> : never }[keyof T]
  : never;

type Prev5207 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5207<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5207 {
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

type ConfigPaths5207 = Paths5207<NestedConfig5207>;

interface HeavyProps5207 {
  config: DeepPartial5207<NestedConfig5207>;
  path?: ConfigPaths5207;
}

const HeavyComponent5207 = memo(function HeavyComponent5207({ config }: HeavyProps5207) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5207) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5207 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5207: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5207.displayName = 'HeavyComponent5207';
export default HeavyComponent5207;
