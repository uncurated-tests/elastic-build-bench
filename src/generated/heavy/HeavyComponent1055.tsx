'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1055<T> = T extends (infer U)[]
  ? DeepReadonlyArray1055<U>
  : T extends object
  ? DeepReadonlyObject1055<T>
  : T;

interface DeepReadonlyArray1055<T> extends ReadonlyArray<DeepReadonly1055<T>> {}

type DeepReadonlyObject1055<T> = {
  readonly [P in keyof T]: DeepReadonly1055<T[P]>;
};

type UnionToIntersection1055<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1055<T> = UnionToIntersection1055<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1055<T extends unknown[], V> = [...T, V];

type TuplifyUnion1055<T, L = LastOf1055<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1055<TuplifyUnion1055<Exclude<T, L>>, L>;

type DeepPartial1055<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1055<T[P]> }
  : T;

type Paths1055<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1055<K, Paths1055<T[K], Prev1055[D]>> : never }[keyof T]
  : never;

type Prev1055 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1055<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1055 {
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

type ConfigPaths1055 = Paths1055<NestedConfig1055>;

interface HeavyProps1055 {
  config: DeepPartial1055<NestedConfig1055>;
  path?: ConfigPaths1055;
}

const HeavyComponent1055 = memo(function HeavyComponent1055({ config }: HeavyProps1055) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1055) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1055 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1055: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1055.displayName = 'HeavyComponent1055';
export default HeavyComponent1055;
