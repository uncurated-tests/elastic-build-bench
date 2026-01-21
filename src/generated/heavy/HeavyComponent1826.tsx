'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1826<T> = T extends (infer U)[]
  ? DeepReadonlyArray1826<U>
  : T extends object
  ? DeepReadonlyObject1826<T>
  : T;

interface DeepReadonlyArray1826<T> extends ReadonlyArray<DeepReadonly1826<T>> {}

type DeepReadonlyObject1826<T> = {
  readonly [P in keyof T]: DeepReadonly1826<T[P]>;
};

type UnionToIntersection1826<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1826<T> = UnionToIntersection1826<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1826<T extends unknown[], V> = [...T, V];

type TuplifyUnion1826<T, L = LastOf1826<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1826<TuplifyUnion1826<Exclude<T, L>>, L>;

type DeepPartial1826<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1826<T[P]> }
  : T;

type Paths1826<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1826<K, Paths1826<T[K], Prev1826[D]>> : never }[keyof T]
  : never;

type Prev1826 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1826<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1826 {
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

type ConfigPaths1826 = Paths1826<NestedConfig1826>;

interface HeavyProps1826 {
  config: DeepPartial1826<NestedConfig1826>;
  path?: ConfigPaths1826;
}

const HeavyComponent1826 = memo(function HeavyComponent1826({ config }: HeavyProps1826) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1826) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1826 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1826: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1826.displayName = 'HeavyComponent1826';
export default HeavyComponent1826;
