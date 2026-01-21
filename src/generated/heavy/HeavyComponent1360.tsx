'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1360<T> = T extends (infer U)[]
  ? DeepReadonlyArray1360<U>
  : T extends object
  ? DeepReadonlyObject1360<T>
  : T;

interface DeepReadonlyArray1360<T> extends ReadonlyArray<DeepReadonly1360<T>> {}

type DeepReadonlyObject1360<T> = {
  readonly [P in keyof T]: DeepReadonly1360<T[P]>;
};

type UnionToIntersection1360<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1360<T> = UnionToIntersection1360<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1360<T extends unknown[], V> = [...T, V];

type TuplifyUnion1360<T, L = LastOf1360<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1360<TuplifyUnion1360<Exclude<T, L>>, L>;

type DeepPartial1360<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1360<T[P]> }
  : T;

type Paths1360<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1360<K, Paths1360<T[K], Prev1360[D]>> : never }[keyof T]
  : never;

type Prev1360 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1360<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1360 {
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

type ConfigPaths1360 = Paths1360<NestedConfig1360>;

interface HeavyProps1360 {
  config: DeepPartial1360<NestedConfig1360>;
  path?: ConfigPaths1360;
}

const HeavyComponent1360 = memo(function HeavyComponent1360({ config }: HeavyProps1360) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1360) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1360 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1360: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1360.displayName = 'HeavyComponent1360';
export default HeavyComponent1360;
