'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3797<T> = T extends (infer U)[]
  ? DeepReadonlyArray3797<U>
  : T extends object
  ? DeepReadonlyObject3797<T>
  : T;

interface DeepReadonlyArray3797<T> extends ReadonlyArray<DeepReadonly3797<T>> {}

type DeepReadonlyObject3797<T> = {
  readonly [P in keyof T]: DeepReadonly3797<T[P]>;
};

type UnionToIntersection3797<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3797<T> = UnionToIntersection3797<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3797<T extends unknown[], V> = [...T, V];

type TuplifyUnion3797<T, L = LastOf3797<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3797<TuplifyUnion3797<Exclude<T, L>>, L>;

type DeepPartial3797<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3797<T[P]> }
  : T;

type Paths3797<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3797<K, Paths3797<T[K], Prev3797[D]>> : never }[keyof T]
  : never;

type Prev3797 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3797<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3797 {
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

type ConfigPaths3797 = Paths3797<NestedConfig3797>;

interface HeavyProps3797 {
  config: DeepPartial3797<NestedConfig3797>;
  path?: ConfigPaths3797;
}

const HeavyComponent3797 = memo(function HeavyComponent3797({ config }: HeavyProps3797) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3797) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3797 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3797: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3797.displayName = 'HeavyComponent3797';
export default HeavyComponent3797;
