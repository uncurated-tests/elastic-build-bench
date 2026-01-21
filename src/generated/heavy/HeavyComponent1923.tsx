'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1923<T> = T extends (infer U)[]
  ? DeepReadonlyArray1923<U>
  : T extends object
  ? DeepReadonlyObject1923<T>
  : T;

interface DeepReadonlyArray1923<T> extends ReadonlyArray<DeepReadonly1923<T>> {}

type DeepReadonlyObject1923<T> = {
  readonly [P in keyof T]: DeepReadonly1923<T[P]>;
};

type UnionToIntersection1923<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1923<T> = UnionToIntersection1923<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1923<T extends unknown[], V> = [...T, V];

type TuplifyUnion1923<T, L = LastOf1923<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1923<TuplifyUnion1923<Exclude<T, L>>, L>;

type DeepPartial1923<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1923<T[P]> }
  : T;

type Paths1923<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1923<K, Paths1923<T[K], Prev1923[D]>> : never }[keyof T]
  : never;

type Prev1923 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1923<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1923 {
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

type ConfigPaths1923 = Paths1923<NestedConfig1923>;

interface HeavyProps1923 {
  config: DeepPartial1923<NestedConfig1923>;
  path?: ConfigPaths1923;
}

const HeavyComponent1923 = memo(function HeavyComponent1923({ config }: HeavyProps1923) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1923) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1923 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1923: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1923.displayName = 'HeavyComponent1923';
export default HeavyComponent1923;
