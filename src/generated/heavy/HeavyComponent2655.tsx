'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2655<T> = T extends (infer U)[]
  ? DeepReadonlyArray2655<U>
  : T extends object
  ? DeepReadonlyObject2655<T>
  : T;

interface DeepReadonlyArray2655<T> extends ReadonlyArray<DeepReadonly2655<T>> {}

type DeepReadonlyObject2655<T> = {
  readonly [P in keyof T]: DeepReadonly2655<T[P]>;
};

type UnionToIntersection2655<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2655<T> = UnionToIntersection2655<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2655<T extends unknown[], V> = [...T, V];

type TuplifyUnion2655<T, L = LastOf2655<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2655<TuplifyUnion2655<Exclude<T, L>>, L>;

type DeepPartial2655<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2655<T[P]> }
  : T;

type Paths2655<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2655<K, Paths2655<T[K], Prev2655[D]>> : never }[keyof T]
  : never;

type Prev2655 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2655<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2655 {
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

type ConfigPaths2655 = Paths2655<NestedConfig2655>;

interface HeavyProps2655 {
  config: DeepPartial2655<NestedConfig2655>;
  path?: ConfigPaths2655;
}

const HeavyComponent2655 = memo(function HeavyComponent2655({ config }: HeavyProps2655) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2655) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2655 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2655: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2655.displayName = 'HeavyComponent2655';
export default HeavyComponent2655;
