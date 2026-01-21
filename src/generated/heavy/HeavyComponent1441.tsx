'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1441<T> = T extends (infer U)[]
  ? DeepReadonlyArray1441<U>
  : T extends object
  ? DeepReadonlyObject1441<T>
  : T;

interface DeepReadonlyArray1441<T> extends ReadonlyArray<DeepReadonly1441<T>> {}

type DeepReadonlyObject1441<T> = {
  readonly [P in keyof T]: DeepReadonly1441<T[P]>;
};

type UnionToIntersection1441<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1441<T> = UnionToIntersection1441<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1441<T extends unknown[], V> = [...T, V];

type TuplifyUnion1441<T, L = LastOf1441<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1441<TuplifyUnion1441<Exclude<T, L>>, L>;

type DeepPartial1441<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1441<T[P]> }
  : T;

type Paths1441<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1441<K, Paths1441<T[K], Prev1441[D]>> : never }[keyof T]
  : never;

type Prev1441 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1441<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1441 {
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

type ConfigPaths1441 = Paths1441<NestedConfig1441>;

interface HeavyProps1441 {
  config: DeepPartial1441<NestedConfig1441>;
  path?: ConfigPaths1441;
}

const HeavyComponent1441 = memo(function HeavyComponent1441({ config }: HeavyProps1441) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1441) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1441 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1441: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1441.displayName = 'HeavyComponent1441';
export default HeavyComponent1441;
