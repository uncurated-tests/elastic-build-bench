'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2546<T> = T extends (infer U)[]
  ? DeepReadonlyArray2546<U>
  : T extends object
  ? DeepReadonlyObject2546<T>
  : T;

interface DeepReadonlyArray2546<T> extends ReadonlyArray<DeepReadonly2546<T>> {}

type DeepReadonlyObject2546<T> = {
  readonly [P in keyof T]: DeepReadonly2546<T[P]>;
};

type UnionToIntersection2546<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2546<T> = UnionToIntersection2546<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2546<T extends unknown[], V> = [...T, V];

type TuplifyUnion2546<T, L = LastOf2546<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2546<TuplifyUnion2546<Exclude<T, L>>, L>;

type DeepPartial2546<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2546<T[P]> }
  : T;

type Paths2546<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2546<K, Paths2546<T[K], Prev2546[D]>> : never }[keyof T]
  : never;

type Prev2546 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2546<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2546 {
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

type ConfigPaths2546 = Paths2546<NestedConfig2546>;

interface HeavyProps2546 {
  config: DeepPartial2546<NestedConfig2546>;
  path?: ConfigPaths2546;
}

const HeavyComponent2546 = memo(function HeavyComponent2546({ config }: HeavyProps2546) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2546) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2546 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2546: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2546.displayName = 'HeavyComponent2546';
export default HeavyComponent2546;
