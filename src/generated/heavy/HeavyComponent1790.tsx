'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1790<T> = T extends (infer U)[]
  ? DeepReadonlyArray1790<U>
  : T extends object
  ? DeepReadonlyObject1790<T>
  : T;

interface DeepReadonlyArray1790<T> extends ReadonlyArray<DeepReadonly1790<T>> {}

type DeepReadonlyObject1790<T> = {
  readonly [P in keyof T]: DeepReadonly1790<T[P]>;
};

type UnionToIntersection1790<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1790<T> = UnionToIntersection1790<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1790<T extends unknown[], V> = [...T, V];

type TuplifyUnion1790<T, L = LastOf1790<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1790<TuplifyUnion1790<Exclude<T, L>>, L>;

type DeepPartial1790<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1790<T[P]> }
  : T;

type Paths1790<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1790<K, Paths1790<T[K], Prev1790[D]>> : never }[keyof T]
  : never;

type Prev1790 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1790<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1790 {
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

type ConfigPaths1790 = Paths1790<NestedConfig1790>;

interface HeavyProps1790 {
  config: DeepPartial1790<NestedConfig1790>;
  path?: ConfigPaths1790;
}

const HeavyComponent1790 = memo(function HeavyComponent1790({ config }: HeavyProps1790) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1790) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1790 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1790: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1790.displayName = 'HeavyComponent1790';
export default HeavyComponent1790;
