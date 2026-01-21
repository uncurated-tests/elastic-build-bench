'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1622<T> = T extends (infer U)[]
  ? DeepReadonlyArray1622<U>
  : T extends object
  ? DeepReadonlyObject1622<T>
  : T;

interface DeepReadonlyArray1622<T> extends ReadonlyArray<DeepReadonly1622<T>> {}

type DeepReadonlyObject1622<T> = {
  readonly [P in keyof T]: DeepReadonly1622<T[P]>;
};

type UnionToIntersection1622<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1622<T> = UnionToIntersection1622<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1622<T extends unknown[], V> = [...T, V];

type TuplifyUnion1622<T, L = LastOf1622<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1622<TuplifyUnion1622<Exclude<T, L>>, L>;

type DeepPartial1622<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1622<T[P]> }
  : T;

type Paths1622<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1622<K, Paths1622<T[K], Prev1622[D]>> : never }[keyof T]
  : never;

type Prev1622 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1622<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1622 {
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

type ConfigPaths1622 = Paths1622<NestedConfig1622>;

interface HeavyProps1622 {
  config: DeepPartial1622<NestedConfig1622>;
  path?: ConfigPaths1622;
}

const HeavyComponent1622 = memo(function HeavyComponent1622({ config }: HeavyProps1622) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1622) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1622 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1622: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1622.displayName = 'HeavyComponent1622';
export default HeavyComponent1622;
