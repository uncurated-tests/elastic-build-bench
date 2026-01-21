'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1986<T> = T extends (infer U)[]
  ? DeepReadonlyArray1986<U>
  : T extends object
  ? DeepReadonlyObject1986<T>
  : T;

interface DeepReadonlyArray1986<T> extends ReadonlyArray<DeepReadonly1986<T>> {}

type DeepReadonlyObject1986<T> = {
  readonly [P in keyof T]: DeepReadonly1986<T[P]>;
};

type UnionToIntersection1986<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1986<T> = UnionToIntersection1986<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1986<T extends unknown[], V> = [...T, V];

type TuplifyUnion1986<T, L = LastOf1986<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1986<TuplifyUnion1986<Exclude<T, L>>, L>;

type DeepPartial1986<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1986<T[P]> }
  : T;

type Paths1986<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1986<K, Paths1986<T[K], Prev1986[D]>> : never }[keyof T]
  : never;

type Prev1986 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1986<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1986 {
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

type ConfigPaths1986 = Paths1986<NestedConfig1986>;

interface HeavyProps1986 {
  config: DeepPartial1986<NestedConfig1986>;
  path?: ConfigPaths1986;
}

const HeavyComponent1986 = memo(function HeavyComponent1986({ config }: HeavyProps1986) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1986) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1986 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1986: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1986.displayName = 'HeavyComponent1986';
export default HeavyComponent1986;
