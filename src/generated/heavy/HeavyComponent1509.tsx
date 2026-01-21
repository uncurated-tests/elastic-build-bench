'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1509<T> = T extends (infer U)[]
  ? DeepReadonlyArray1509<U>
  : T extends object
  ? DeepReadonlyObject1509<T>
  : T;

interface DeepReadonlyArray1509<T> extends ReadonlyArray<DeepReadonly1509<T>> {}

type DeepReadonlyObject1509<T> = {
  readonly [P in keyof T]: DeepReadonly1509<T[P]>;
};

type UnionToIntersection1509<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1509<T> = UnionToIntersection1509<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1509<T extends unknown[], V> = [...T, V];

type TuplifyUnion1509<T, L = LastOf1509<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1509<TuplifyUnion1509<Exclude<T, L>>, L>;

type DeepPartial1509<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1509<T[P]> }
  : T;

type Paths1509<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1509<K, Paths1509<T[K], Prev1509[D]>> : never }[keyof T]
  : never;

type Prev1509 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1509<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1509 {
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

type ConfigPaths1509 = Paths1509<NestedConfig1509>;

interface HeavyProps1509 {
  config: DeepPartial1509<NestedConfig1509>;
  path?: ConfigPaths1509;
}

const HeavyComponent1509 = memo(function HeavyComponent1509({ config }: HeavyProps1509) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1509) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1509 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1509: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1509.displayName = 'HeavyComponent1509';
export default HeavyComponent1509;
