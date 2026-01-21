'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1244<T> = T extends (infer U)[]
  ? DeepReadonlyArray1244<U>
  : T extends object
  ? DeepReadonlyObject1244<T>
  : T;

interface DeepReadonlyArray1244<T> extends ReadonlyArray<DeepReadonly1244<T>> {}

type DeepReadonlyObject1244<T> = {
  readonly [P in keyof T]: DeepReadonly1244<T[P]>;
};

type UnionToIntersection1244<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1244<T> = UnionToIntersection1244<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1244<T extends unknown[], V> = [...T, V];

type TuplifyUnion1244<T, L = LastOf1244<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1244<TuplifyUnion1244<Exclude<T, L>>, L>;

type DeepPartial1244<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1244<T[P]> }
  : T;

type Paths1244<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1244<K, Paths1244<T[K], Prev1244[D]>> : never }[keyof T]
  : never;

type Prev1244 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1244<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1244 {
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

type ConfigPaths1244 = Paths1244<NestedConfig1244>;

interface HeavyProps1244 {
  config: DeepPartial1244<NestedConfig1244>;
  path?: ConfigPaths1244;
}

const HeavyComponent1244 = memo(function HeavyComponent1244({ config }: HeavyProps1244) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1244) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1244 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1244: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1244.displayName = 'HeavyComponent1244';
export default HeavyComponent1244;
