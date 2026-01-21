'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1496<T> = T extends (infer U)[]
  ? DeepReadonlyArray1496<U>
  : T extends object
  ? DeepReadonlyObject1496<T>
  : T;

interface DeepReadonlyArray1496<T> extends ReadonlyArray<DeepReadonly1496<T>> {}

type DeepReadonlyObject1496<T> = {
  readonly [P in keyof T]: DeepReadonly1496<T[P]>;
};

type UnionToIntersection1496<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1496<T> = UnionToIntersection1496<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1496<T extends unknown[], V> = [...T, V];

type TuplifyUnion1496<T, L = LastOf1496<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1496<TuplifyUnion1496<Exclude<T, L>>, L>;

type DeepPartial1496<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1496<T[P]> }
  : T;

type Paths1496<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1496<K, Paths1496<T[K], Prev1496[D]>> : never }[keyof T]
  : never;

type Prev1496 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1496<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1496 {
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

type ConfigPaths1496 = Paths1496<NestedConfig1496>;

interface HeavyProps1496 {
  config: DeepPartial1496<NestedConfig1496>;
  path?: ConfigPaths1496;
}

const HeavyComponent1496 = memo(function HeavyComponent1496({ config }: HeavyProps1496) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1496) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1496 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1496: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1496.displayName = 'HeavyComponent1496';
export default HeavyComponent1496;
