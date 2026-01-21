'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2356<T> = T extends (infer U)[]
  ? DeepReadonlyArray2356<U>
  : T extends object
  ? DeepReadonlyObject2356<T>
  : T;

interface DeepReadonlyArray2356<T> extends ReadonlyArray<DeepReadonly2356<T>> {}

type DeepReadonlyObject2356<T> = {
  readonly [P in keyof T]: DeepReadonly2356<T[P]>;
};

type UnionToIntersection2356<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2356<T> = UnionToIntersection2356<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2356<T extends unknown[], V> = [...T, V];

type TuplifyUnion2356<T, L = LastOf2356<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2356<TuplifyUnion2356<Exclude<T, L>>, L>;

type DeepPartial2356<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2356<T[P]> }
  : T;

type Paths2356<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2356<K, Paths2356<T[K], Prev2356[D]>> : never }[keyof T]
  : never;

type Prev2356 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2356<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2356 {
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

type ConfigPaths2356 = Paths2356<NestedConfig2356>;

interface HeavyProps2356 {
  config: DeepPartial2356<NestedConfig2356>;
  path?: ConfigPaths2356;
}

const HeavyComponent2356 = memo(function HeavyComponent2356({ config }: HeavyProps2356) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2356) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2356 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2356: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2356.displayName = 'HeavyComponent2356';
export default HeavyComponent2356;
