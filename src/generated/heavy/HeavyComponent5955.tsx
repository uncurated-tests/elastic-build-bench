'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5955<T> = T extends (infer U)[]
  ? DeepReadonlyArray5955<U>
  : T extends object
  ? DeepReadonlyObject5955<T>
  : T;

interface DeepReadonlyArray5955<T> extends ReadonlyArray<DeepReadonly5955<T>> {}

type DeepReadonlyObject5955<T> = {
  readonly [P in keyof T]: DeepReadonly5955<T[P]>;
};

type UnionToIntersection5955<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5955<T> = UnionToIntersection5955<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5955<T extends unknown[], V> = [...T, V];

type TuplifyUnion5955<T, L = LastOf5955<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5955<TuplifyUnion5955<Exclude<T, L>>, L>;

type DeepPartial5955<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5955<T[P]> }
  : T;

type Paths5955<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5955<K, Paths5955<T[K], Prev5955[D]>> : never }[keyof T]
  : never;

type Prev5955 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5955<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5955 {
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

type ConfigPaths5955 = Paths5955<NestedConfig5955>;

interface HeavyProps5955 {
  config: DeepPartial5955<NestedConfig5955>;
  path?: ConfigPaths5955;
}

const HeavyComponent5955 = memo(function HeavyComponent5955({ config }: HeavyProps5955) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5955) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5955 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5955: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5955.displayName = 'HeavyComponent5955';
export default HeavyComponent5955;
