'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1141<T> = T extends (infer U)[]
  ? DeepReadonlyArray1141<U>
  : T extends object
  ? DeepReadonlyObject1141<T>
  : T;

interface DeepReadonlyArray1141<T> extends ReadonlyArray<DeepReadonly1141<T>> {}

type DeepReadonlyObject1141<T> = {
  readonly [P in keyof T]: DeepReadonly1141<T[P]>;
};

type UnionToIntersection1141<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1141<T> = UnionToIntersection1141<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1141<T extends unknown[], V> = [...T, V];

type TuplifyUnion1141<T, L = LastOf1141<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1141<TuplifyUnion1141<Exclude<T, L>>, L>;

type DeepPartial1141<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1141<T[P]> }
  : T;

type Paths1141<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1141<K, Paths1141<T[K], Prev1141[D]>> : never }[keyof T]
  : never;

type Prev1141 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1141<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1141 {
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

type ConfigPaths1141 = Paths1141<NestedConfig1141>;

interface HeavyProps1141 {
  config: DeepPartial1141<NestedConfig1141>;
  path?: ConfigPaths1141;
}

const HeavyComponent1141 = memo(function HeavyComponent1141({ config }: HeavyProps1141) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1141) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1141 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1141: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1141.displayName = 'HeavyComponent1141';
export default HeavyComponent1141;
