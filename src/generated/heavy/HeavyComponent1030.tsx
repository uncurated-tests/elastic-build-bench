'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1030<T> = T extends (infer U)[]
  ? DeepReadonlyArray1030<U>
  : T extends object
  ? DeepReadonlyObject1030<T>
  : T;

interface DeepReadonlyArray1030<T> extends ReadonlyArray<DeepReadonly1030<T>> {}

type DeepReadonlyObject1030<T> = {
  readonly [P in keyof T]: DeepReadonly1030<T[P]>;
};

type UnionToIntersection1030<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1030<T> = UnionToIntersection1030<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1030<T extends unknown[], V> = [...T, V];

type TuplifyUnion1030<T, L = LastOf1030<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1030<TuplifyUnion1030<Exclude<T, L>>, L>;

type DeepPartial1030<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1030<T[P]> }
  : T;

type Paths1030<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1030<K, Paths1030<T[K], Prev1030[D]>> : never }[keyof T]
  : never;

type Prev1030 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1030<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1030 {
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

type ConfigPaths1030 = Paths1030<NestedConfig1030>;

interface HeavyProps1030 {
  config: DeepPartial1030<NestedConfig1030>;
  path?: ConfigPaths1030;
}

const HeavyComponent1030 = memo(function HeavyComponent1030({ config }: HeavyProps1030) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1030) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1030 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1030: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1030.displayName = 'HeavyComponent1030';
export default HeavyComponent1030;
