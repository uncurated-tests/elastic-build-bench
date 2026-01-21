'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1174<T> = T extends (infer U)[]
  ? DeepReadonlyArray1174<U>
  : T extends object
  ? DeepReadonlyObject1174<T>
  : T;

interface DeepReadonlyArray1174<T> extends ReadonlyArray<DeepReadonly1174<T>> {}

type DeepReadonlyObject1174<T> = {
  readonly [P in keyof T]: DeepReadonly1174<T[P]>;
};

type UnionToIntersection1174<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1174<T> = UnionToIntersection1174<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1174<T extends unknown[], V> = [...T, V];

type TuplifyUnion1174<T, L = LastOf1174<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1174<TuplifyUnion1174<Exclude<T, L>>, L>;

type DeepPartial1174<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1174<T[P]> }
  : T;

type Paths1174<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1174<K, Paths1174<T[K], Prev1174[D]>> : never }[keyof T]
  : never;

type Prev1174 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1174<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1174 {
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

type ConfigPaths1174 = Paths1174<NestedConfig1174>;

interface HeavyProps1174 {
  config: DeepPartial1174<NestedConfig1174>;
  path?: ConfigPaths1174;
}

const HeavyComponent1174 = memo(function HeavyComponent1174({ config }: HeavyProps1174) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1174) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1174 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1174: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1174.displayName = 'HeavyComponent1174';
export default HeavyComponent1174;
