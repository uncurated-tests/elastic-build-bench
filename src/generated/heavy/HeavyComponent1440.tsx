'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1440<T> = T extends (infer U)[]
  ? DeepReadonlyArray1440<U>
  : T extends object
  ? DeepReadonlyObject1440<T>
  : T;

interface DeepReadonlyArray1440<T> extends ReadonlyArray<DeepReadonly1440<T>> {}

type DeepReadonlyObject1440<T> = {
  readonly [P in keyof T]: DeepReadonly1440<T[P]>;
};

type UnionToIntersection1440<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1440<T> = UnionToIntersection1440<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1440<T extends unknown[], V> = [...T, V];

type TuplifyUnion1440<T, L = LastOf1440<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1440<TuplifyUnion1440<Exclude<T, L>>, L>;

type DeepPartial1440<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1440<T[P]> }
  : T;

type Paths1440<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1440<K, Paths1440<T[K], Prev1440[D]>> : never }[keyof T]
  : never;

type Prev1440 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1440<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1440 {
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

type ConfigPaths1440 = Paths1440<NestedConfig1440>;

interface HeavyProps1440 {
  config: DeepPartial1440<NestedConfig1440>;
  path?: ConfigPaths1440;
}

const HeavyComponent1440 = memo(function HeavyComponent1440({ config }: HeavyProps1440) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1440) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1440 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1440: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1440.displayName = 'HeavyComponent1440';
export default HeavyComponent1440;
