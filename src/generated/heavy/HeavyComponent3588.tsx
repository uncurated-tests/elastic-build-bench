'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3588<T> = T extends (infer U)[]
  ? DeepReadonlyArray3588<U>
  : T extends object
  ? DeepReadonlyObject3588<T>
  : T;

interface DeepReadonlyArray3588<T> extends ReadonlyArray<DeepReadonly3588<T>> {}

type DeepReadonlyObject3588<T> = {
  readonly [P in keyof T]: DeepReadonly3588<T[P]>;
};

type UnionToIntersection3588<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3588<T> = UnionToIntersection3588<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3588<T extends unknown[], V> = [...T, V];

type TuplifyUnion3588<T, L = LastOf3588<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3588<TuplifyUnion3588<Exclude<T, L>>, L>;

type DeepPartial3588<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3588<T[P]> }
  : T;

type Paths3588<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3588<K, Paths3588<T[K], Prev3588[D]>> : never }[keyof T]
  : never;

type Prev3588 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3588<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3588 {
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

type ConfigPaths3588 = Paths3588<NestedConfig3588>;

interface HeavyProps3588 {
  config: DeepPartial3588<NestedConfig3588>;
  path?: ConfigPaths3588;
}

const HeavyComponent3588 = memo(function HeavyComponent3588({ config }: HeavyProps3588) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3588) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3588 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3588: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3588.displayName = 'HeavyComponent3588';
export default HeavyComponent3588;
