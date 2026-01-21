'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly2020<T> = T extends (infer U)[]
  ? DeepReadonlyArray2020<U>
  : T extends object
  ? DeepReadonlyObject2020<T>
  : T;

interface DeepReadonlyArray2020<T> extends ReadonlyArray<DeepReadonly2020<T>> {}

type DeepReadonlyObject2020<T> = {
  readonly [P in keyof T]: DeepReadonly2020<T[P]>;
};

type UnionToIntersection2020<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf2020<T> = UnionToIntersection2020<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push2020<T extends unknown[], V> = [...T, V];

type TuplifyUnion2020<T, L = LastOf2020<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push2020<TuplifyUnion2020<Exclude<T, L>>, L>;

type DeepPartial2020<T> = T extends object
  ? { [P in keyof T]?: DeepPartial2020<T[P]> }
  : T;

type Paths2020<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join2020<K, Paths2020<T[K], Prev2020[D]>> : never }[keyof T]
  : never;

type Prev2020 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join2020<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig2020 {
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

type ConfigPaths2020 = Paths2020<NestedConfig2020>;

interface HeavyProps2020 {
  config: DeepPartial2020<NestedConfig2020>;
  path?: ConfigPaths2020;
}

const HeavyComponent2020 = memo(function HeavyComponent2020({ config }: HeavyProps2020) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 2020) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-2020 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H2020: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent2020.displayName = 'HeavyComponent2020';
export default HeavyComponent2020;
