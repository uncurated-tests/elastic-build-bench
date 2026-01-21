'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1363<T> = T extends (infer U)[]
  ? DeepReadonlyArray1363<U>
  : T extends object
  ? DeepReadonlyObject1363<T>
  : T;

interface DeepReadonlyArray1363<T> extends ReadonlyArray<DeepReadonly1363<T>> {}

type DeepReadonlyObject1363<T> = {
  readonly [P in keyof T]: DeepReadonly1363<T[P]>;
};

type UnionToIntersection1363<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1363<T> = UnionToIntersection1363<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1363<T extends unknown[], V> = [...T, V];

type TuplifyUnion1363<T, L = LastOf1363<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1363<TuplifyUnion1363<Exclude<T, L>>, L>;

type DeepPartial1363<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1363<T[P]> }
  : T;

type Paths1363<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1363<K, Paths1363<T[K], Prev1363[D]>> : never }[keyof T]
  : never;

type Prev1363 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1363<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1363 {
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

type ConfigPaths1363 = Paths1363<NestedConfig1363>;

interface HeavyProps1363 {
  config: DeepPartial1363<NestedConfig1363>;
  path?: ConfigPaths1363;
}

const HeavyComponent1363 = memo(function HeavyComponent1363({ config }: HeavyProps1363) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1363) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1363 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1363: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1363.displayName = 'HeavyComponent1363';
export default HeavyComponent1363;
