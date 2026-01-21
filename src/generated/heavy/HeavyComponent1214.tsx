'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1214<T> = T extends (infer U)[]
  ? DeepReadonlyArray1214<U>
  : T extends object
  ? DeepReadonlyObject1214<T>
  : T;

interface DeepReadonlyArray1214<T> extends ReadonlyArray<DeepReadonly1214<T>> {}

type DeepReadonlyObject1214<T> = {
  readonly [P in keyof T]: DeepReadonly1214<T[P]>;
};

type UnionToIntersection1214<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1214<T> = UnionToIntersection1214<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1214<T extends unknown[], V> = [...T, V];

type TuplifyUnion1214<T, L = LastOf1214<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1214<TuplifyUnion1214<Exclude<T, L>>, L>;

type DeepPartial1214<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1214<T[P]> }
  : T;

type Paths1214<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1214<K, Paths1214<T[K], Prev1214[D]>> : never }[keyof T]
  : never;

type Prev1214 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1214<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1214 {
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

type ConfigPaths1214 = Paths1214<NestedConfig1214>;

interface HeavyProps1214 {
  config: DeepPartial1214<NestedConfig1214>;
  path?: ConfigPaths1214;
}

const HeavyComponent1214 = memo(function HeavyComponent1214({ config }: HeavyProps1214) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1214) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1214 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1214: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1214.displayName = 'HeavyComponent1214';
export default HeavyComponent1214;
