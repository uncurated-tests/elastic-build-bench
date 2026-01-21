'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5087<T> = T extends (infer U)[]
  ? DeepReadonlyArray5087<U>
  : T extends object
  ? DeepReadonlyObject5087<T>
  : T;

interface DeepReadonlyArray5087<T> extends ReadonlyArray<DeepReadonly5087<T>> {}

type DeepReadonlyObject5087<T> = {
  readonly [P in keyof T]: DeepReadonly5087<T[P]>;
};

type UnionToIntersection5087<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5087<T> = UnionToIntersection5087<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5087<T extends unknown[], V> = [...T, V];

type TuplifyUnion5087<T, L = LastOf5087<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5087<TuplifyUnion5087<Exclude<T, L>>, L>;

type DeepPartial5087<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5087<T[P]> }
  : T;

type Paths5087<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5087<K, Paths5087<T[K], Prev5087[D]>> : never }[keyof T]
  : never;

type Prev5087 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5087<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5087 {
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

type ConfigPaths5087 = Paths5087<NestedConfig5087>;

interface HeavyProps5087 {
  config: DeepPartial5087<NestedConfig5087>;
  path?: ConfigPaths5087;
}

const HeavyComponent5087 = memo(function HeavyComponent5087({ config }: HeavyProps5087) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5087) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5087 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5087: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5087.displayName = 'HeavyComponent5087';
export default HeavyComponent5087;
