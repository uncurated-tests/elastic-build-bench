'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1946<T> = T extends (infer U)[]
  ? DeepReadonlyArray1946<U>
  : T extends object
  ? DeepReadonlyObject1946<T>
  : T;

interface DeepReadonlyArray1946<T> extends ReadonlyArray<DeepReadonly1946<T>> {}

type DeepReadonlyObject1946<T> = {
  readonly [P in keyof T]: DeepReadonly1946<T[P]>;
};

type UnionToIntersection1946<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1946<T> = UnionToIntersection1946<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1946<T extends unknown[], V> = [...T, V];

type TuplifyUnion1946<T, L = LastOf1946<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1946<TuplifyUnion1946<Exclude<T, L>>, L>;

type DeepPartial1946<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1946<T[P]> }
  : T;

type Paths1946<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1946<K, Paths1946<T[K], Prev1946[D]>> : never }[keyof T]
  : never;

type Prev1946 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1946<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1946 {
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

type ConfigPaths1946 = Paths1946<NestedConfig1946>;

interface HeavyProps1946 {
  config: DeepPartial1946<NestedConfig1946>;
  path?: ConfigPaths1946;
}

const HeavyComponent1946 = memo(function HeavyComponent1946({ config }: HeavyProps1946) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1946) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1946 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1946: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1946.displayName = 'HeavyComponent1946';
export default HeavyComponent1946;
