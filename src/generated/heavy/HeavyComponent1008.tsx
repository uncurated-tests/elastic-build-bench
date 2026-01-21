'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1008<T> = T extends (infer U)[]
  ? DeepReadonlyArray1008<U>
  : T extends object
  ? DeepReadonlyObject1008<T>
  : T;

interface DeepReadonlyArray1008<T> extends ReadonlyArray<DeepReadonly1008<T>> {}

type DeepReadonlyObject1008<T> = {
  readonly [P in keyof T]: DeepReadonly1008<T[P]>;
};

type UnionToIntersection1008<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1008<T> = UnionToIntersection1008<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1008<T extends unknown[], V> = [...T, V];

type TuplifyUnion1008<T, L = LastOf1008<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1008<TuplifyUnion1008<Exclude<T, L>>, L>;

type DeepPartial1008<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1008<T[P]> }
  : T;

type Paths1008<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1008<K, Paths1008<T[K], Prev1008[D]>> : never }[keyof T]
  : never;

type Prev1008 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1008<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1008 {
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

type ConfigPaths1008 = Paths1008<NestedConfig1008>;

interface HeavyProps1008 {
  config: DeepPartial1008<NestedConfig1008>;
  path?: ConfigPaths1008;
}

const HeavyComponent1008 = memo(function HeavyComponent1008({ config }: HeavyProps1008) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1008) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1008 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1008: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1008.displayName = 'HeavyComponent1008';
export default HeavyComponent1008;
