'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2174<T> = T extends (infer U)[]
  ? DeepReadonlyArray2174<U>
  : T extends object
  ? DeepReadonlyObject2174<T>
  : T;

interface DeepReadonlyArray2174<T> extends ReadonlyArray<DeepReadonly2174<T>> {}

type DeepReadonlyObject2174<T> = {
  readonly [P in keyof T]: DeepReadonly2174<T[P]>;
};

type UnionToIntersection2174<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2174<T> = UnionToIntersection2174<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2174<T extends unknown[], V> = [...T, V];

type TuplifyUnion2174<T, L = LastOf2174<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2174<TuplifyUnion2174<Exclude<T, L>>, L>;

type DeepPartial2174<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2174<T[P]> }
  : T;

type Paths2174<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2174<K, Paths2174<T[K], Prev2174[D]>> : never }[keyof T]
  : never;

type Prev2174 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2174<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2174 {
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

type ConfigPaths2174 = Paths2174<NestedConfig2174>;

interface HeavyProps2174 {
  config: DeepPartial2174<NestedConfig2174>;
  path?: ConfigPaths2174;
}

const HeavyComponent2174 = memo(function HeavyComponent2174({ config }: HeavyProps2174) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2174) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2174 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2174: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2174.displayName = 'HeavyComponent2174';
export default HeavyComponent2174;
