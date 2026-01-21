'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1083<T> = T extends (infer U)[]
  ? DeepReadonlyArray1083<U>
  : T extends object
  ? DeepReadonlyObject1083<T>
  : T;

interface DeepReadonlyArray1083<T> extends ReadonlyArray<DeepReadonly1083<T>> {}

type DeepReadonlyObject1083<T> = {
  readonly [P in keyof T]: DeepReadonly1083<T[P]>;
};

type UnionToIntersection1083<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1083<T> = UnionToIntersection1083<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1083<T extends unknown[], V> = [...T, V];

type TuplifyUnion1083<T, L = LastOf1083<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1083<TuplifyUnion1083<Exclude<T, L>>, L>;

type DeepPartial1083<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1083<T[P]> }
  : T;

type Paths1083<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1083<K, Paths1083<T[K], Prev1083[D]>> : never }[keyof T]
  : never;

type Prev1083 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1083<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1083 {
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

type ConfigPaths1083 = Paths1083<NestedConfig1083>;

interface HeavyProps1083 {
  config: DeepPartial1083<NestedConfig1083>;
  path?: ConfigPaths1083;
}

const HeavyComponent1083 = memo(function HeavyComponent1083({ config }: HeavyProps1083) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1083) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1083 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1083: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1083.displayName = 'HeavyComponent1083';
export default HeavyComponent1083;
