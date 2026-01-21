'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1366<T> = T extends (infer U)[]
  ? DeepReadonlyArray1366<U>
  : T extends object
  ? DeepReadonlyObject1366<T>
  : T;

interface DeepReadonlyArray1366<T> extends ReadonlyArray<DeepReadonly1366<T>> {}

type DeepReadonlyObject1366<T> = {
  readonly [P in keyof T]: DeepReadonly1366<T[P]>;
};

type UnionToIntersection1366<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1366<T> = UnionToIntersection1366<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1366<T extends unknown[], V> = [...T, V];

type TuplifyUnion1366<T, L = LastOf1366<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1366<TuplifyUnion1366<Exclude<T, L>>, L>;

type DeepPartial1366<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1366<T[P]> }
  : T;

type Paths1366<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1366<K, Paths1366<T[K], Prev1366[D]>> : never }[keyof T]
  : never;

type Prev1366 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1366<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1366 {
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

type ConfigPaths1366 = Paths1366<NestedConfig1366>;

interface HeavyProps1366 {
  config: DeepPartial1366<NestedConfig1366>;
  path?: ConfigPaths1366;
}

const HeavyComponent1366 = memo(function HeavyComponent1366({ config }: HeavyProps1366) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1366) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1366 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1366: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1366.displayName = 'HeavyComponent1366';
export default HeavyComponent1366;
