'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3911<T> = T extends (infer U)[]
  ? DeepReadonlyArray3911<U>
  : T extends object
  ? DeepReadonlyObject3911<T>
  : T;

interface DeepReadonlyArray3911<T> extends ReadonlyArray<DeepReadonly3911<T>> {}

type DeepReadonlyObject3911<T> = {
  readonly [P in keyof T]: DeepReadonly3911<T[P]>;
};

type UnionToIntersection3911<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3911<T> = UnionToIntersection3911<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3911<T extends unknown[], V> = [...T, V];

type TuplifyUnion3911<T, L = LastOf3911<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3911<TuplifyUnion3911<Exclude<T, L>>, L>;

type DeepPartial3911<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3911<T[P]> }
  : T;

type Paths3911<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3911<K, Paths3911<T[K], Prev3911[D]>> : never }[keyof T]
  : never;

type Prev3911 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3911<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3911 {
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

type ConfigPaths3911 = Paths3911<NestedConfig3911>;

interface HeavyProps3911 {
  config: DeepPartial3911<NestedConfig3911>;
  path?: ConfigPaths3911;
}

const HeavyComponent3911 = memo(function HeavyComponent3911({ config }: HeavyProps3911) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3911) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3911 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3911: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3911.displayName = 'HeavyComponent3911';
export default HeavyComponent3911;
