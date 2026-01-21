'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5429<T> = T extends (infer U)[]
  ? DeepReadonlyArray5429<U>
  : T extends object
  ? DeepReadonlyObject5429<T>
  : T;

interface DeepReadonlyArray5429<T> extends ReadonlyArray<DeepReadonly5429<T>> {}

type DeepReadonlyObject5429<T> = {
  readonly [P in keyof T]: DeepReadonly5429<T[P]>;
};

type UnionToIntersection5429<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5429<T> = UnionToIntersection5429<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5429<T extends unknown[], V> = [...T, V];

type TuplifyUnion5429<T, L = LastOf5429<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5429<TuplifyUnion5429<Exclude<T, L>>, L>;

type DeepPartial5429<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5429<T[P]> }
  : T;

type Paths5429<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5429<K, Paths5429<T[K], Prev5429[D]>> : never }[keyof T]
  : never;

type Prev5429 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5429<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5429 {
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

type ConfigPaths5429 = Paths5429<NestedConfig5429>;

interface HeavyProps5429 {
  config: DeepPartial5429<NestedConfig5429>;
  path?: ConfigPaths5429;
}

const HeavyComponent5429 = memo(function HeavyComponent5429({ config }: HeavyProps5429) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5429) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5429 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5429: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5429.displayName = 'HeavyComponent5429';
export default HeavyComponent5429;
