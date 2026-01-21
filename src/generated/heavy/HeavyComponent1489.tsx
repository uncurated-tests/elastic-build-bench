'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1489<T> = T extends (infer U)[]
  ? DeepReadonlyArray1489<U>
  : T extends object
  ? DeepReadonlyObject1489<T>
  : T;

interface DeepReadonlyArray1489<T> extends ReadonlyArray<DeepReadonly1489<T>> {}

type DeepReadonlyObject1489<T> = {
  readonly [P in keyof T]: DeepReadonly1489<T[P]>;
};

type UnionToIntersection1489<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1489<T> = UnionToIntersection1489<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1489<T extends unknown[], V> = [...T, V];

type TuplifyUnion1489<T, L = LastOf1489<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1489<TuplifyUnion1489<Exclude<T, L>>, L>;

type DeepPartial1489<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1489<T[P]> }
  : T;

type Paths1489<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1489<K, Paths1489<T[K], Prev1489[D]>> : never }[keyof T]
  : never;

type Prev1489 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1489<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1489 {
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

type ConfigPaths1489 = Paths1489<NestedConfig1489>;

interface HeavyProps1489 {
  config: DeepPartial1489<NestedConfig1489>;
  path?: ConfigPaths1489;
}

const HeavyComponent1489 = memo(function HeavyComponent1489({ config }: HeavyProps1489) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1489) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1489 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1489: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1489.displayName = 'HeavyComponent1489';
export default HeavyComponent1489;
