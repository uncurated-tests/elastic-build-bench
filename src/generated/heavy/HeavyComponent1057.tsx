'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1057<T> = T extends (infer U)[]
  ? DeepReadonlyArray1057<U>
  : T extends object
  ? DeepReadonlyObject1057<T>
  : T;

interface DeepReadonlyArray1057<T> extends ReadonlyArray<DeepReadonly1057<T>> {}

type DeepReadonlyObject1057<T> = {
  readonly [P in keyof T]: DeepReadonly1057<T[P]>;
};

type UnionToIntersection1057<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1057<T> = UnionToIntersection1057<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1057<T extends unknown[], V> = [...T, V];

type TuplifyUnion1057<T, L = LastOf1057<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1057<TuplifyUnion1057<Exclude<T, L>>, L>;

type DeepPartial1057<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1057<T[P]> }
  : T;

type Paths1057<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1057<K, Paths1057<T[K], Prev1057[D]>> : never }[keyof T]
  : never;

type Prev1057 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1057<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1057 {
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

type ConfigPaths1057 = Paths1057<NestedConfig1057>;

interface HeavyProps1057 {
  config: DeepPartial1057<NestedConfig1057>;
  path?: ConfigPaths1057;
}

const HeavyComponent1057 = memo(function HeavyComponent1057({ config }: HeavyProps1057) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1057) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1057 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1057: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1057.displayName = 'HeavyComponent1057';
export default HeavyComponent1057;
