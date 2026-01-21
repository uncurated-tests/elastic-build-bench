'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1421<T> = T extends (infer U)[]
  ? DeepReadonlyArray1421<U>
  : T extends object
  ? DeepReadonlyObject1421<T>
  : T;

interface DeepReadonlyArray1421<T> extends ReadonlyArray<DeepReadonly1421<T>> {}

type DeepReadonlyObject1421<T> = {
  readonly [P in keyof T]: DeepReadonly1421<T[P]>;
};

type UnionToIntersection1421<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1421<T> = UnionToIntersection1421<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1421<T extends unknown[], V> = [...T, V];

type TuplifyUnion1421<T, L = LastOf1421<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1421<TuplifyUnion1421<Exclude<T, L>>, L>;

type DeepPartial1421<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1421<T[P]> }
  : T;

type Paths1421<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1421<K, Paths1421<T[K], Prev1421[D]>> : never }[keyof T]
  : never;

type Prev1421 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1421<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1421 {
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

type ConfigPaths1421 = Paths1421<NestedConfig1421>;

interface HeavyProps1421 {
  config: DeepPartial1421<NestedConfig1421>;
  path?: ConfigPaths1421;
}

const HeavyComponent1421 = memo(function HeavyComponent1421({ config }: HeavyProps1421) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1421) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1421 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1421: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1421.displayName = 'HeavyComponent1421';
export default HeavyComponent1421;
