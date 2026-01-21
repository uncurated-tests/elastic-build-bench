'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2138<T> = T extends (infer U)[]
  ? DeepReadonlyArray2138<U>
  : T extends object
  ? DeepReadonlyObject2138<T>
  : T;

interface DeepReadonlyArray2138<T> extends ReadonlyArray<DeepReadonly2138<T>> {}

type DeepReadonlyObject2138<T> = {
  readonly [P in keyof T]: DeepReadonly2138<T[P]>;
};

type UnionToIntersection2138<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2138<T> = UnionToIntersection2138<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2138<T extends unknown[], V> = [...T, V];

type TuplifyUnion2138<T, L = LastOf2138<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2138<TuplifyUnion2138<Exclude<T, L>>, L>;

type DeepPartial2138<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2138<T[P]> }
  : T;

type Paths2138<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2138<K, Paths2138<T[K], Prev2138[D]>> : never }[keyof T]
  : never;

type Prev2138 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2138<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2138 {
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

type ConfigPaths2138 = Paths2138<NestedConfig2138>;

interface HeavyProps2138 {
  config: DeepPartial2138<NestedConfig2138>;
  path?: ConfigPaths2138;
}

const HeavyComponent2138 = memo(function HeavyComponent2138({ config }: HeavyProps2138) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2138) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2138 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2138: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2138.displayName = 'HeavyComponent2138';
export default HeavyComponent2138;
