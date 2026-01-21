'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1022<T> = T extends (infer U)[]
  ? DeepReadonlyArray1022<U>
  : T extends object
  ? DeepReadonlyObject1022<T>
  : T;

interface DeepReadonlyArray1022<T> extends ReadonlyArray<DeepReadonly1022<T>> {}

type DeepReadonlyObject1022<T> = {
  readonly [P in keyof T]: DeepReadonly1022<T[P]>;
};

type UnionToIntersection1022<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1022<T> = UnionToIntersection1022<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1022<T extends unknown[], V> = [...T, V];

type TuplifyUnion1022<T, L = LastOf1022<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1022<TuplifyUnion1022<Exclude<T, L>>, L>;

type DeepPartial1022<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1022<T[P]> }
  : T;

type Paths1022<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1022<K, Paths1022<T[K], Prev1022[D]>> : never }[keyof T]
  : never;

type Prev1022 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1022<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1022 {
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

type ConfigPaths1022 = Paths1022<NestedConfig1022>;

interface HeavyProps1022 {
  config: DeepPartial1022<NestedConfig1022>;
  path?: ConfigPaths1022;
}

const HeavyComponent1022 = memo(function HeavyComponent1022({ config }: HeavyProps1022) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1022) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1022 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1022: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1022.displayName = 'HeavyComponent1022';
export default HeavyComponent1022;
