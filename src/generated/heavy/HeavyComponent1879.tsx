'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1879<T> = T extends (infer U)[]
  ? DeepReadonlyArray1879<U>
  : T extends object
  ? DeepReadonlyObject1879<T>
  : T;

interface DeepReadonlyArray1879<T> extends ReadonlyArray<DeepReadonly1879<T>> {}

type DeepReadonlyObject1879<T> = {
  readonly [P in keyof T]: DeepReadonly1879<T[P]>;
};

type UnionToIntersection1879<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1879<T> = UnionToIntersection1879<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1879<T extends unknown[], V> = [...T, V];

type TuplifyUnion1879<T, L = LastOf1879<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1879<TuplifyUnion1879<Exclude<T, L>>, L>;

type DeepPartial1879<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1879<T[P]> }
  : T;

type Paths1879<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1879<K, Paths1879<T[K], Prev1879[D]>> : never }[keyof T]
  : never;

type Prev1879 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1879<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1879 {
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

type ConfigPaths1879 = Paths1879<NestedConfig1879>;

interface HeavyProps1879 {
  config: DeepPartial1879<NestedConfig1879>;
  path?: ConfigPaths1879;
}

const HeavyComponent1879 = memo(function HeavyComponent1879({ config }: HeavyProps1879) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1879) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1879 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1879: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1879.displayName = 'HeavyComponent1879';
export default HeavyComponent1879;
