'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2052<T> = T extends (infer U)[]
  ? DeepReadonlyArray2052<U>
  : T extends object
  ? DeepReadonlyObject2052<T>
  : T;

interface DeepReadonlyArray2052<T> extends ReadonlyArray<DeepReadonly2052<T>> {}

type DeepReadonlyObject2052<T> = {
  readonly [P in keyof T]: DeepReadonly2052<T[P]>;
};

type UnionToIntersection2052<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2052<T> = UnionToIntersection2052<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2052<T extends unknown[], V> = [...T, V];

type TuplifyUnion2052<T, L = LastOf2052<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2052<TuplifyUnion2052<Exclude<T, L>>, L>;

type DeepPartial2052<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2052<T[P]> }
  : T;

type Paths2052<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2052<K, Paths2052<T[K], Prev2052[D]>> : never }[keyof T]
  : never;

type Prev2052 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2052<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2052 {
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

type ConfigPaths2052 = Paths2052<NestedConfig2052>;

interface HeavyProps2052 {
  config: DeepPartial2052<NestedConfig2052>;
  path?: ConfigPaths2052;
}

const HeavyComponent2052 = memo(function HeavyComponent2052({ config }: HeavyProps2052) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2052) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2052 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2052: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2052.displayName = 'HeavyComponent2052';
export default HeavyComponent2052;
