'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1042<T> = T extends (infer U)[]
  ? DeepReadonlyArray1042<U>
  : T extends object
  ? DeepReadonlyObject1042<T>
  : T;

interface DeepReadonlyArray1042<T> extends ReadonlyArray<DeepReadonly1042<T>> {}

type DeepReadonlyObject1042<T> = {
  readonly [P in keyof T]: DeepReadonly1042<T[P]>;
};

type UnionToIntersection1042<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1042<T> = UnionToIntersection1042<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1042<T extends unknown[], V> = [...T, V];

type TuplifyUnion1042<T, L = LastOf1042<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1042<TuplifyUnion1042<Exclude<T, L>>, L>;

type DeepPartial1042<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1042<T[P]> }
  : T;

type Paths1042<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1042<K, Paths1042<T[K], Prev1042[D]>> : never }[keyof T]
  : never;

type Prev1042 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1042<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1042 {
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

type ConfigPaths1042 = Paths1042<NestedConfig1042>;

interface HeavyProps1042 {
  config: DeepPartial1042<NestedConfig1042>;
  path?: ConfigPaths1042;
}

const HeavyComponent1042 = memo(function HeavyComponent1042({ config }: HeavyProps1042) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1042) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1042 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1042: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1042.displayName = 'HeavyComponent1042';
export default HeavyComponent1042;
