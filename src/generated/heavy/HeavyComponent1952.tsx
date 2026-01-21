'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1952<T> = T extends (infer U)[]
  ? DeepReadonlyArray1952<U>
  : T extends object
  ? DeepReadonlyObject1952<T>
  : T;

interface DeepReadonlyArray1952<T> extends ReadonlyArray<DeepReadonly1952<T>> {}

type DeepReadonlyObject1952<T> = {
  readonly [P in keyof T]: DeepReadonly1952<T[P]>;
};

type UnionToIntersection1952<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1952<T> = UnionToIntersection1952<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1952<T extends unknown[], V> = [...T, V];

type TuplifyUnion1952<T, L = LastOf1952<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1952<TuplifyUnion1952<Exclude<T, L>>, L>;

type DeepPartial1952<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1952<T[P]> }
  : T;

type Paths1952<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1952<K, Paths1952<T[K], Prev1952[D]>> : never }[keyof T]
  : never;

type Prev1952 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1952<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1952 {
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

type ConfigPaths1952 = Paths1952<NestedConfig1952>;

interface HeavyProps1952 {
  config: DeepPartial1952<NestedConfig1952>;
  path?: ConfigPaths1952;
}

const HeavyComponent1952 = memo(function HeavyComponent1952({ config }: HeavyProps1952) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1952) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1952 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1952: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1952.displayName = 'HeavyComponent1952';
export default HeavyComponent1952;
