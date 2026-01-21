'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1105<T> = T extends (infer U)[]
  ? DeepReadonlyArray1105<U>
  : T extends object
  ? DeepReadonlyObject1105<T>
  : T;

interface DeepReadonlyArray1105<T> extends ReadonlyArray<DeepReadonly1105<T>> {}

type DeepReadonlyObject1105<T> = {
  readonly [P in keyof T]: DeepReadonly1105<T[P]>;
};

type UnionToIntersection1105<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1105<T> = UnionToIntersection1105<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1105<T extends unknown[], V> = [...T, V];

type TuplifyUnion1105<T, L = LastOf1105<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1105<TuplifyUnion1105<Exclude<T, L>>, L>;

type DeepPartial1105<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1105<T[P]> }
  : T;

type Paths1105<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1105<K, Paths1105<T[K], Prev1105[D]>> : never }[keyof T]
  : never;

type Prev1105 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1105<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1105 {
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

type ConfigPaths1105 = Paths1105<NestedConfig1105>;

interface HeavyProps1105 {
  config: DeepPartial1105<NestedConfig1105>;
  path?: ConfigPaths1105;
}

const HeavyComponent1105 = memo(function HeavyComponent1105({ config }: HeavyProps1105) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1105) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1105 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1105: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1105.displayName = 'HeavyComponent1105';
export default HeavyComponent1105;
