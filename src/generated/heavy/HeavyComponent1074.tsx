'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1074<T> = T extends (infer U)[]
  ? DeepReadonlyArray1074<U>
  : T extends object
  ? DeepReadonlyObject1074<T>
  : T;

interface DeepReadonlyArray1074<T> extends ReadonlyArray<DeepReadonly1074<T>> {}

type DeepReadonlyObject1074<T> = {
  readonly [P in keyof T]: DeepReadonly1074<T[P]>;
};

type UnionToIntersection1074<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1074<T> = UnionToIntersection1074<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1074<T extends unknown[], V> = [...T, V];

type TuplifyUnion1074<T, L = LastOf1074<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1074<TuplifyUnion1074<Exclude<T, L>>, L>;

type DeepPartial1074<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1074<T[P]> }
  : T;

type Paths1074<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1074<K, Paths1074<T[K], Prev1074[D]>> : never }[keyof T]
  : never;

type Prev1074 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1074<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1074 {
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

type ConfigPaths1074 = Paths1074<NestedConfig1074>;

interface HeavyProps1074 {
  config: DeepPartial1074<NestedConfig1074>;
  path?: ConfigPaths1074;
}

const HeavyComponent1074 = memo(function HeavyComponent1074({ config }: HeavyProps1074) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1074) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1074 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1074: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1074.displayName = 'HeavyComponent1074';
export default HeavyComponent1074;
