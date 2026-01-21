'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1660<T> = T extends (infer U)[]
  ? DeepReadonlyArray1660<U>
  : T extends object
  ? DeepReadonlyObject1660<T>
  : T;

interface DeepReadonlyArray1660<T> extends ReadonlyArray<DeepReadonly1660<T>> {}

type DeepReadonlyObject1660<T> = {
  readonly [P in keyof T]: DeepReadonly1660<T[P]>;
};

type UnionToIntersection1660<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1660<T> = UnionToIntersection1660<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1660<T extends unknown[], V> = [...T, V];

type TuplifyUnion1660<T, L = LastOf1660<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1660<TuplifyUnion1660<Exclude<T, L>>, L>;

type DeepPartial1660<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1660<T[P]> }
  : T;

type Paths1660<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1660<K, Paths1660<T[K], Prev1660[D]>> : never }[keyof T]
  : never;

type Prev1660 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1660<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1660 {
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

type ConfigPaths1660 = Paths1660<NestedConfig1660>;

interface HeavyProps1660 {
  config: DeepPartial1660<NestedConfig1660>;
  path?: ConfigPaths1660;
}

const HeavyComponent1660 = memo(function HeavyComponent1660({ config }: HeavyProps1660) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1660) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1660 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1660: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1660.displayName = 'HeavyComponent1660';
export default HeavyComponent1660;
