'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly1588<T> = T extends (infer U)[]
  ? DeepReadonlyArray1588<U>
  : T extends object
  ? DeepReadonlyObject1588<T>
  : T;

interface DeepReadonlyArray1588<T> extends ReadonlyArray<DeepReadonly1588<T>> {}

type DeepReadonlyObject1588<T> = {
  readonly [P in keyof T]: DeepReadonly1588<T[P]>;
};

type UnionToIntersection1588<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf1588<T> = UnionToIntersection1588<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push1588<T extends unknown[], V> = [...T, V];

type TuplifyUnion1588<T, L = LastOf1588<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push1588<TuplifyUnion1588<Exclude<T, L>>, L>;

type DeepPartial1588<T> = T extends object
  ? { [P in keyof T]?: DeepPartial1588<T[P]> }
  : T;

type Paths1588<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join1588<K, Paths1588<T[K], Prev1588[D]>> : never }[keyof T]
  : never;

type Prev1588 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join1588<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig1588 {
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

type ConfigPaths1588 = Paths1588<NestedConfig1588>;

interface HeavyProps1588 {
  config: DeepPartial1588<NestedConfig1588>;
  path?: ConfigPaths1588;
}

const HeavyComponent1588 = memo(function HeavyComponent1588({ config }: HeavyProps1588) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 1588) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-1588 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H1588: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent1588.displayName = 'HeavyComponent1588';
export default HeavyComponent1588;
