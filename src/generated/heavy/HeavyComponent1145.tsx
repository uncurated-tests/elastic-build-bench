'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1145<T> = T extends (infer U)[]
  ? DeepReadonlyArray1145<U>
  : T extends object
  ? DeepReadonlyObject1145<T>
  : T;

interface DeepReadonlyArray1145<T> extends ReadonlyArray<DeepReadonly1145<T>> {}

type DeepReadonlyObject1145<T> = {
  readonly [P in keyof T]: DeepReadonly1145<T[P]>;
};

type UnionToIntersection1145<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1145<T> = UnionToIntersection1145<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1145<T extends unknown[], V> = [...T, V];

type TuplifyUnion1145<T, L = LastOf1145<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1145<TuplifyUnion1145<Exclude<T, L>>, L>;

type DeepPartial1145<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1145<T[P]> }
  : T;

type Paths1145<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1145<K, Paths1145<T[K], Prev1145[D]>> : never }[keyof T]
  : never;

type Prev1145 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1145<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1145 {
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

type ConfigPaths1145 = Paths1145<NestedConfig1145>;

interface HeavyProps1145 {
  config: DeepPartial1145<NestedConfig1145>;
  path?: ConfigPaths1145;
}

const HeavyComponent1145 = memo(function HeavyComponent1145({ config }: HeavyProps1145) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1145) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1145 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1145: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1145.displayName = 'HeavyComponent1145';
export default HeavyComponent1145;
