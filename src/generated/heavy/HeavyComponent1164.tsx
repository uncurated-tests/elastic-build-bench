'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1164<T> = T extends (infer U)[]
  ? DeepReadonlyArray1164<U>
  : T extends object
  ? DeepReadonlyObject1164<T>
  : T;

interface DeepReadonlyArray1164<T> extends ReadonlyArray<DeepReadonly1164<T>> {}

type DeepReadonlyObject1164<T> = {
  readonly [P in keyof T]: DeepReadonly1164<T[P]>;
};

type UnionToIntersection1164<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1164<T> = UnionToIntersection1164<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1164<T extends unknown[], V> = [...T, V];

type TuplifyUnion1164<T, L = LastOf1164<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1164<TuplifyUnion1164<Exclude<T, L>>, L>;

type DeepPartial1164<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1164<T[P]> }
  : T;

type Paths1164<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1164<K, Paths1164<T[K], Prev1164[D]>> : never }[keyof T]
  : never;

type Prev1164 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1164<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1164 {
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

type ConfigPaths1164 = Paths1164<NestedConfig1164>;

interface HeavyProps1164 {
  config: DeepPartial1164<NestedConfig1164>;
  path?: ConfigPaths1164;
}

const HeavyComponent1164 = memo(function HeavyComponent1164({ config }: HeavyProps1164) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1164) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1164 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1164: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1164.displayName = 'HeavyComponent1164';
export default HeavyComponent1164;
