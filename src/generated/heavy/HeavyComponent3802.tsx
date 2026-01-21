'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3802<T> = T extends (infer U)[]
  ? DeepReadonlyArray3802<U>
  : T extends object
  ? DeepReadonlyObject3802<T>
  : T;

interface DeepReadonlyArray3802<T> extends ReadonlyArray<DeepReadonly3802<T>> {}

type DeepReadonlyObject3802<T> = {
  readonly [P in keyof T]: DeepReadonly3802<T[P]>;
};

type UnionToIntersection3802<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3802<T> = UnionToIntersection3802<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3802<T extends unknown[], V> = [...T, V];

type TuplifyUnion3802<T, L = LastOf3802<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3802<TuplifyUnion3802<Exclude<T, L>>, L>;

type DeepPartial3802<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3802<T[P]> }
  : T;

type Paths3802<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3802<K, Paths3802<T[K], Prev3802[D]>> : never }[keyof T]
  : never;

type Prev3802 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3802<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3802 {
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

type ConfigPaths3802 = Paths3802<NestedConfig3802>;

interface HeavyProps3802 {
  config: DeepPartial3802<NestedConfig3802>;
  path?: ConfigPaths3802;
}

const HeavyComponent3802 = memo(function HeavyComponent3802({ config }: HeavyProps3802) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3802) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3802 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3802: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3802.displayName = 'HeavyComponent3802';
export default HeavyComponent3802;
