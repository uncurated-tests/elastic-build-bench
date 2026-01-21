'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1124<T> = T extends (infer U)[]
  ? DeepReadonlyArray1124<U>
  : T extends object
  ? DeepReadonlyObject1124<T>
  : T;

interface DeepReadonlyArray1124<T> extends ReadonlyArray<DeepReadonly1124<T>> {}

type DeepReadonlyObject1124<T> = {
  readonly [P in keyof T]: DeepReadonly1124<T[P]>;
};

type UnionToIntersection1124<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1124<T> = UnionToIntersection1124<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1124<T extends unknown[], V> = [...T, V];

type TuplifyUnion1124<T, L = LastOf1124<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1124<TuplifyUnion1124<Exclude<T, L>>, L>;

type DeepPartial1124<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1124<T[P]> }
  : T;

type Paths1124<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1124<K, Paths1124<T[K], Prev1124[D]>> : never }[keyof T]
  : never;

type Prev1124 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1124<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1124 {
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

type ConfigPaths1124 = Paths1124<NestedConfig1124>;

interface HeavyProps1124 {
  config: DeepPartial1124<NestedConfig1124>;
  path?: ConfigPaths1124;
}

const HeavyComponent1124 = memo(function HeavyComponent1124({ config }: HeavyProps1124) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1124) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1124 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1124: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1124.displayName = 'HeavyComponent1124';
export default HeavyComponent1124;
