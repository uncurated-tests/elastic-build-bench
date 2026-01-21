'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1205<T> = T extends (infer U)[]
  ? DeepReadonlyArray1205<U>
  : T extends object
  ? DeepReadonlyObject1205<T>
  : T;

interface DeepReadonlyArray1205<T> extends ReadonlyArray<DeepReadonly1205<T>> {}

type DeepReadonlyObject1205<T> = {
  readonly [P in keyof T]: DeepReadonly1205<T[P]>;
};

type UnionToIntersection1205<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1205<T> = UnionToIntersection1205<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1205<T extends unknown[], V> = [...T, V];

type TuplifyUnion1205<T, L = LastOf1205<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1205<TuplifyUnion1205<Exclude<T, L>>, L>;

type DeepPartial1205<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1205<T[P]> }
  : T;

type Paths1205<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1205<K, Paths1205<T[K], Prev1205[D]>> : never }[keyof T]
  : never;

type Prev1205 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1205<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1205 {
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

type ConfigPaths1205 = Paths1205<NestedConfig1205>;

interface HeavyProps1205 {
  config: DeepPartial1205<NestedConfig1205>;
  path?: ConfigPaths1205;
}

const HeavyComponent1205 = memo(function HeavyComponent1205({ config }: HeavyProps1205) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1205) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1205 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1205: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1205.displayName = 'HeavyComponent1205';
export default HeavyComponent1205;
