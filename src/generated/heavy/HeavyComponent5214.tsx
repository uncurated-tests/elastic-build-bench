'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly5214<T> = T extends (infer U)[]
  ? DeepReadonlyArray5214<U>
  : T extends object
  ? DeepReadonlyObject5214<T>
  : T;

interface DeepReadonlyArray5214<T> extends ReadonlyArray<DeepReadonly5214<T>> {}

type DeepReadonlyObject5214<T> = {
  readonly [P in keyof T]: DeepReadonly5214<T[P]>;
};

type UnionToIntersection5214<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf5214<T> = UnionToIntersection5214<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push5214<T extends unknown[], V> = [...T, V];

type TuplifyUnion5214<T, L = LastOf5214<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push5214<TuplifyUnion5214<Exclude<T, L>>, L>;

type DeepPartial5214<T> = T extends object
  ? { [P in keyof T]?: DeepPartial5214<T[P]> }
  : T;

type Paths5214<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join5214<K, Paths5214<T[K], Prev5214[D]>> : never }[keyof T]
  : never;

type Prev5214 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join5214<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig5214 {
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

type ConfigPaths5214 = Paths5214<NestedConfig5214>;

interface HeavyProps5214 {
  config: DeepPartial5214<NestedConfig5214>;
  path?: ConfigPaths5214;
}

const HeavyComponent5214 = memo(function HeavyComponent5214({ config }: HeavyProps5214) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 5214) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-5214 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H5214: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent5214.displayName = 'HeavyComponent5214';
export default HeavyComponent5214;
