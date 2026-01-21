'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2122<T> = T extends (infer U)[]
  ? DeepReadonlyArray2122<U>
  : T extends object
  ? DeepReadonlyObject2122<T>
  : T;

interface DeepReadonlyArray2122<T> extends ReadonlyArray<DeepReadonly2122<T>> {}

type DeepReadonlyObject2122<T> = {
  readonly [P in keyof T]: DeepReadonly2122<T[P]>;
};

type UnionToIntersection2122<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2122<T> = UnionToIntersection2122<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2122<T extends unknown[], V> = [...T, V];

type TuplifyUnion2122<T, L = LastOf2122<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2122<TuplifyUnion2122<Exclude<T, L>>, L>;

type DeepPartial2122<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2122<T[P]> }
  : T;

type Paths2122<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2122<K, Paths2122<T[K], Prev2122[D]>> : never }[keyof T]
  : never;

type Prev2122 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2122<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2122 {
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

type ConfigPaths2122 = Paths2122<NestedConfig2122>;

interface HeavyProps2122 {
  config: DeepPartial2122<NestedConfig2122>;
  path?: ConfigPaths2122;
}

const HeavyComponent2122 = memo(function HeavyComponent2122({ config }: HeavyProps2122) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2122) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2122 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2122: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2122.displayName = 'HeavyComponent2122';
export default HeavyComponent2122;
