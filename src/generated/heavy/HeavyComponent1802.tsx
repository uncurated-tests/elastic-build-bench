'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1802<T> = T extends (infer U)[]
  ? DeepReadonlyArray1802<U>
  : T extends object
  ? DeepReadonlyObject1802<T>
  : T;

interface DeepReadonlyArray1802<T> extends ReadonlyArray<DeepReadonly1802<T>> {}

type DeepReadonlyObject1802<T> = {
  readonly [P in keyof T]: DeepReadonly1802<T[P]>;
};

type UnionToIntersection1802<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1802<T> = UnionToIntersection1802<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1802<T extends unknown[], V> = [...T, V];

type TuplifyUnion1802<T, L = LastOf1802<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1802<TuplifyUnion1802<Exclude<T, L>>, L>;

type DeepPartial1802<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1802<T[P]> }
  : T;

type Paths1802<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1802<K, Paths1802<T[K], Prev1802[D]>> : never }[keyof T]
  : never;

type Prev1802 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1802<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1802 {
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

type ConfigPaths1802 = Paths1802<NestedConfig1802>;

interface HeavyProps1802 {
  config: DeepPartial1802<NestedConfig1802>;
  path?: ConfigPaths1802;
}

const HeavyComponent1802 = memo(function HeavyComponent1802({ config }: HeavyProps1802) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1802) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1802 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1802: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1802.displayName = 'HeavyComponent1802';
export default HeavyComponent1802;
