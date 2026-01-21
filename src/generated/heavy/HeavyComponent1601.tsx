'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1601<T> = T extends (infer U)[]
  ? DeepReadonlyArray1601<U>
  : T extends object
  ? DeepReadonlyObject1601<T>
  : T;

interface DeepReadonlyArray1601<T> extends ReadonlyArray<DeepReadonly1601<T>> {}

type DeepReadonlyObject1601<T> = {
  readonly [P in keyof T]: DeepReadonly1601<T[P]>;
};

type UnionToIntersection1601<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1601<T> = UnionToIntersection1601<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1601<T extends unknown[], V> = [...T, V];

type TuplifyUnion1601<T, L = LastOf1601<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1601<TuplifyUnion1601<Exclude<T, L>>, L>;

type DeepPartial1601<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1601<T[P]> }
  : T;

type Paths1601<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1601<K, Paths1601<T[K], Prev1601[D]>> : never }[keyof T]
  : never;

type Prev1601 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1601<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1601 {
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

type ConfigPaths1601 = Paths1601<NestedConfig1601>;

interface HeavyProps1601 {
  config: DeepPartial1601<NestedConfig1601>;
  path?: ConfigPaths1601;
}

const HeavyComponent1601 = memo(function HeavyComponent1601({ config }: HeavyProps1601) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1601) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1601 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1601: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1601.displayName = 'HeavyComponent1601';
export default HeavyComponent1601;
