'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1173<T> = T extends (infer U)[]
  ? DeepReadonlyArray1173<U>
  : T extends object
  ? DeepReadonlyObject1173<T>
  : T;

interface DeepReadonlyArray1173<T> extends ReadonlyArray<DeepReadonly1173<T>> {}

type DeepReadonlyObject1173<T> = {
  readonly [P in keyof T]: DeepReadonly1173<T[P]>;
};

type UnionToIntersection1173<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1173<T> = UnionToIntersection1173<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1173<T extends unknown[], V> = [...T, V];

type TuplifyUnion1173<T, L = LastOf1173<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1173<TuplifyUnion1173<Exclude<T, L>>, L>;

type DeepPartial1173<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1173<T[P]> }
  : T;

type Paths1173<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1173<K, Paths1173<T[K], Prev1173[D]>> : never }[keyof T]
  : never;

type Prev1173 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1173<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1173 {
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

type ConfigPaths1173 = Paths1173<NestedConfig1173>;

interface HeavyProps1173 {
  config: DeepPartial1173<NestedConfig1173>;
  path?: ConfigPaths1173;
}

const HeavyComponent1173 = memo(function HeavyComponent1173({ config }: HeavyProps1173) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1173) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1173 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1173: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1173.displayName = 'HeavyComponent1173';
export default HeavyComponent1173;
