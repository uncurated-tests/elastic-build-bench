'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1510<T> = T extends (infer U)[]
  ? DeepReadonlyArray1510<U>
  : T extends object
  ? DeepReadonlyObject1510<T>
  : T;

interface DeepReadonlyArray1510<T> extends ReadonlyArray<DeepReadonly1510<T>> {}

type DeepReadonlyObject1510<T> = {
  readonly [P in keyof T]: DeepReadonly1510<T[P]>;
};

type UnionToIntersection1510<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1510<T> = UnionToIntersection1510<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1510<T extends unknown[], V> = [...T, V];

type TuplifyUnion1510<T, L = LastOf1510<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1510<TuplifyUnion1510<Exclude<T, L>>, L>;

type DeepPartial1510<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1510<T[P]> }
  : T;

type Paths1510<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1510<K, Paths1510<T[K], Prev1510[D]>> : never }[keyof T]
  : never;

type Prev1510 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1510<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1510 {
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

type ConfigPaths1510 = Paths1510<NestedConfig1510>;

interface HeavyProps1510 {
  config: DeepPartial1510<NestedConfig1510>;
  path?: ConfigPaths1510;
}

const HeavyComponent1510 = memo(function HeavyComponent1510({ config }: HeavyProps1510) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1510) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1510 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1510: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1510.displayName = 'HeavyComponent1510';
export default HeavyComponent1510;
