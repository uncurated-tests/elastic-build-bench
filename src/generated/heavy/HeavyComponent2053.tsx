'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2053<T> = T extends (infer U)[]
  ? DeepReadonlyArray2053<U>
  : T extends object
  ? DeepReadonlyObject2053<T>
  : T;

interface DeepReadonlyArray2053<T> extends ReadonlyArray<DeepReadonly2053<T>> {}

type DeepReadonlyObject2053<T> = {
  readonly [P in keyof T]: DeepReadonly2053<T[P]>;
};

type UnionToIntersection2053<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2053<T> = UnionToIntersection2053<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2053<T extends unknown[], V> = [...T, V];

type TuplifyUnion2053<T, L = LastOf2053<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2053<TuplifyUnion2053<Exclude<T, L>>, L>;

type DeepPartial2053<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2053<T[P]> }
  : T;

type Paths2053<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2053<K, Paths2053<T[K], Prev2053[D]>> : never }[keyof T]
  : never;

type Prev2053 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2053<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2053 {
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

type ConfigPaths2053 = Paths2053<NestedConfig2053>;

interface HeavyProps2053 {
  config: DeepPartial2053<NestedConfig2053>;
  path?: ConfigPaths2053;
}

const HeavyComponent2053 = memo(function HeavyComponent2053({ config }: HeavyProps2053) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2053) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2053 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2053: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2053.displayName = 'HeavyComponent2053';
export default HeavyComponent2053;
