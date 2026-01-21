'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1200<T> = T extends (infer U)[]
  ? DeepReadonlyArray1200<U>
  : T extends object
  ? DeepReadonlyObject1200<T>
  : T;

interface DeepReadonlyArray1200<T> extends ReadonlyArray<DeepReadonly1200<T>> {}

type DeepReadonlyObject1200<T> = {
  readonly [P in keyof T]: DeepReadonly1200<T[P]>;
};

type UnionToIntersection1200<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1200<T> = UnionToIntersection1200<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1200<T extends unknown[], V> = [...T, V];

type TuplifyUnion1200<T, L = LastOf1200<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1200<TuplifyUnion1200<Exclude<T, L>>, L>;

type DeepPartial1200<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1200<T[P]> }
  : T;

type Paths1200<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1200<K, Paths1200<T[K], Prev1200[D]>> : never }[keyof T]
  : never;

type Prev1200 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1200<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1200 {
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

type ConfigPaths1200 = Paths1200<NestedConfig1200>;

interface HeavyProps1200 {
  config: DeepPartial1200<NestedConfig1200>;
  path?: ConfigPaths1200;
}

const HeavyComponent1200 = memo(function HeavyComponent1200({ config }: HeavyProps1200) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1200) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1200 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1200: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1200.displayName = 'HeavyComponent1200';
export default HeavyComponent1200;
