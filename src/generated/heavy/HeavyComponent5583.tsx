'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5583<T> = T extends (infer U)[]
  ? DeepReadonlyArray5583<U>
  : T extends object
  ? DeepReadonlyObject5583<T>
  : T;

interface DeepReadonlyArray5583<T> extends ReadonlyArray<DeepReadonly5583<T>> {}

type DeepReadonlyObject5583<T> = {
  readonly [P in keyof T]: DeepReadonly5583<T[P]>;
};

type UnionToIntersection5583<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5583<T> = UnionToIntersection5583<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5583<T extends unknown[], V> = [...T, V];

type TuplifyUnion5583<T, L = LastOf5583<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5583<TuplifyUnion5583<Exclude<T, L>>, L>;

type DeepPartial5583<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5583<T[P]> }
  : T;

type Paths5583<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5583<K, Paths5583<T[K], Prev5583[D]>> : never }[keyof T]
  : never;

type Prev5583 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5583<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5583 {
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

type ConfigPaths5583 = Paths5583<NestedConfig5583>;

interface HeavyProps5583 {
  config: DeepPartial5583<NestedConfig5583>;
  path?: ConfigPaths5583;
}

const HeavyComponent5583 = memo(function HeavyComponent5583({ config }: HeavyProps5583) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5583) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5583 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5583: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5583.displayName = 'HeavyComponent5583';
export default HeavyComponent5583;
