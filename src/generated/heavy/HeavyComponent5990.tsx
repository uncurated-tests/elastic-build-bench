'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5990<T> = T extends (infer U)[]
  ? DeepReadonlyArray5990<U>
  : T extends object
  ? DeepReadonlyObject5990<T>
  : T;

interface DeepReadonlyArray5990<T> extends ReadonlyArray<DeepReadonly5990<T>> {}

type DeepReadonlyObject5990<T> = {
  readonly [P in keyof T]: DeepReadonly5990<T[P]>;
};

type UnionToIntersection5990<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5990<T> = UnionToIntersection5990<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5990<T extends unknown[], V> = [...T, V];

type TuplifyUnion5990<T, L = LastOf5990<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5990<TuplifyUnion5990<Exclude<T, L>>, L>;

type DeepPartial5990<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5990<T[P]> }
  : T;

type Paths5990<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5990<K, Paths5990<T[K], Prev5990[D]>> : never }[keyof T]
  : never;

type Prev5990 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5990<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5990 {
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

type ConfigPaths5990 = Paths5990<NestedConfig5990>;

interface HeavyProps5990 {
  config: DeepPartial5990<NestedConfig5990>;
  path?: ConfigPaths5990;
}

const HeavyComponent5990 = memo(function HeavyComponent5990({ config }: HeavyProps5990) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5990) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5990 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5990: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5990.displayName = 'HeavyComponent5990';
export default HeavyComponent5990;
