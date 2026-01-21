'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2369<T> = T extends (infer U)[]
  ? DeepReadonlyArray2369<U>
  : T extends object
  ? DeepReadonlyObject2369<T>
  : T;

interface DeepReadonlyArray2369<T> extends ReadonlyArray<DeepReadonly2369<T>> {}

type DeepReadonlyObject2369<T> = {
  readonly [P in keyof T]: DeepReadonly2369<T[P]>;
};

type UnionToIntersection2369<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2369<T> = UnionToIntersection2369<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2369<T extends unknown[], V> = [...T, V];

type TuplifyUnion2369<T, L = LastOf2369<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2369<TuplifyUnion2369<Exclude<T, L>>, L>;

type DeepPartial2369<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2369<T[P]> }
  : T;

type Paths2369<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2369<K, Paths2369<T[K], Prev2369[D]>> : never }[keyof T]
  : never;

type Prev2369 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2369<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2369 {
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

type ConfigPaths2369 = Paths2369<NestedConfig2369>;

interface HeavyProps2369 {
  config: DeepPartial2369<NestedConfig2369>;
  path?: ConfigPaths2369;
}

const HeavyComponent2369 = memo(function HeavyComponent2369({ config }: HeavyProps2369) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2369) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2369 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2369: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2369.displayName = 'HeavyComponent2369';
export default HeavyComponent2369;
