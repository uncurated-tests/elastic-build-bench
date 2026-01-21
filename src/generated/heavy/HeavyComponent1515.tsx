'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1515<T> = T extends (infer U)[]
  ? DeepReadonlyArray1515<U>
  : T extends object
  ? DeepReadonlyObject1515<T>
  : T;

interface DeepReadonlyArray1515<T> extends ReadonlyArray<DeepReadonly1515<T>> {}

type DeepReadonlyObject1515<T> = {
  readonly [P in keyof T]: DeepReadonly1515<T[P]>;
};

type UnionToIntersection1515<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1515<T> = UnionToIntersection1515<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1515<T extends unknown[], V> = [...T, V];

type TuplifyUnion1515<T, L = LastOf1515<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1515<TuplifyUnion1515<Exclude<T, L>>, L>;

type DeepPartial1515<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1515<T[P]> }
  : T;

type Paths1515<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1515<K, Paths1515<T[K], Prev1515[D]>> : never }[keyof T]
  : never;

type Prev1515 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1515<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1515 {
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

type ConfigPaths1515 = Paths1515<NestedConfig1515>;

interface HeavyProps1515 {
  config: DeepPartial1515<NestedConfig1515>;
  path?: ConfigPaths1515;
}

const HeavyComponent1515 = memo(function HeavyComponent1515({ config }: HeavyProps1515) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1515) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1515 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1515: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1515.displayName = 'HeavyComponent1515';
export default HeavyComponent1515;
