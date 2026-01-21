'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1901<T> = T extends (infer U)[]
  ? DeepReadonlyArray1901<U>
  : T extends object
  ? DeepReadonlyObject1901<T>
  : T;

interface DeepReadonlyArray1901<T> extends ReadonlyArray<DeepReadonly1901<T>> {}

type DeepReadonlyObject1901<T> = {
  readonly [P in keyof T]: DeepReadonly1901<T[P]>;
};

type UnionToIntersection1901<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1901<T> = UnionToIntersection1901<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1901<T extends unknown[], V> = [...T, V];

type TuplifyUnion1901<T, L = LastOf1901<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1901<TuplifyUnion1901<Exclude<T, L>>, L>;

type DeepPartial1901<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1901<T[P]> }
  : T;

type Paths1901<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1901<K, Paths1901<T[K], Prev1901[D]>> : never }[keyof T]
  : never;

type Prev1901 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1901<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1901 {
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

type ConfigPaths1901 = Paths1901<NestedConfig1901>;

interface HeavyProps1901 {
  config: DeepPartial1901<NestedConfig1901>;
  path?: ConfigPaths1901;
}

const HeavyComponent1901 = memo(function HeavyComponent1901({ config }: HeavyProps1901) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1901) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1901 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1901: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1901.displayName = 'HeavyComponent1901';
export default HeavyComponent1901;
