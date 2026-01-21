'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1793<T> = T extends (infer U)[]
  ? DeepReadonlyArray1793<U>
  : T extends object
  ? DeepReadonlyObject1793<T>
  : T;

interface DeepReadonlyArray1793<T> extends ReadonlyArray<DeepReadonly1793<T>> {}

type DeepReadonlyObject1793<T> = {
  readonly [P in keyof T]: DeepReadonly1793<T[P]>;
};

type UnionToIntersection1793<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1793<T> = UnionToIntersection1793<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1793<T extends unknown[], V> = [...T, V];

type TuplifyUnion1793<T, L = LastOf1793<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1793<TuplifyUnion1793<Exclude<T, L>>, L>;

type DeepPartial1793<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1793<T[P]> }
  : T;

type Paths1793<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1793<K, Paths1793<T[K], Prev1793[D]>> : never }[keyof T]
  : never;

type Prev1793 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1793<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1793 {
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

type ConfigPaths1793 = Paths1793<NestedConfig1793>;

interface HeavyProps1793 {
  config: DeepPartial1793<NestedConfig1793>;
  path?: ConfigPaths1793;
}

const HeavyComponent1793 = memo(function HeavyComponent1793({ config }: HeavyProps1793) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1793) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1793 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1793: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1793.displayName = 'HeavyComponent1793';
export default HeavyComponent1793;
