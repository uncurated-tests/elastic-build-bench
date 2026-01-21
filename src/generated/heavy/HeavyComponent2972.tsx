'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2972<T> = T extends (infer U)[]
  ? DeepReadonlyArray2972<U>
  : T extends object
  ? DeepReadonlyObject2972<T>
  : T;

interface DeepReadonlyArray2972<T> extends ReadonlyArray<DeepReadonly2972<T>> {}

type DeepReadonlyObject2972<T> = {
  readonly [P in keyof T]: DeepReadonly2972<T[P]>;
};

type UnionToIntersection2972<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2972<T> = UnionToIntersection2972<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2972<T extends unknown[], V> = [...T, V];

type TuplifyUnion2972<T, L = LastOf2972<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2972<TuplifyUnion2972<Exclude<T, L>>, L>;

type DeepPartial2972<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2972<T[P]> }
  : T;

type Paths2972<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2972<K, Paths2972<T[K], Prev2972[D]>> : never }[keyof T]
  : never;

type Prev2972 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2972<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2972 {
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

type ConfigPaths2972 = Paths2972<NestedConfig2972>;

interface HeavyProps2972 {
  config: DeepPartial2972<NestedConfig2972>;
  path?: ConfigPaths2972;
}

const HeavyComponent2972 = memo(function HeavyComponent2972({ config }: HeavyProps2972) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2972) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2972 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2972: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2972.displayName = 'HeavyComponent2972';
export default HeavyComponent2972;
