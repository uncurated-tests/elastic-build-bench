'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1378<T> = T extends (infer U)[]
  ? DeepReadonlyArray1378<U>
  : T extends object
  ? DeepReadonlyObject1378<T>
  : T;

interface DeepReadonlyArray1378<T> extends ReadonlyArray<DeepReadonly1378<T>> {}

type DeepReadonlyObject1378<T> = {
  readonly [P in keyof T]: DeepReadonly1378<T[P]>;
};

type UnionToIntersection1378<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1378<T> = UnionToIntersection1378<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1378<T extends unknown[], V> = [...T, V];

type TuplifyUnion1378<T, L = LastOf1378<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1378<TuplifyUnion1378<Exclude<T, L>>, L>;

type DeepPartial1378<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1378<T[P]> }
  : T;

type Paths1378<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1378<K, Paths1378<T[K], Prev1378[D]>> : never }[keyof T]
  : never;

type Prev1378 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1378<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1378 {
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

type ConfigPaths1378 = Paths1378<NestedConfig1378>;

interface HeavyProps1378 {
  config: DeepPartial1378<NestedConfig1378>;
  path?: ConfigPaths1378;
}

const HeavyComponent1378 = memo(function HeavyComponent1378({ config }: HeavyProps1378) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1378) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1378 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1378: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1378.displayName = 'HeavyComponent1378';
export default HeavyComponent1378;
