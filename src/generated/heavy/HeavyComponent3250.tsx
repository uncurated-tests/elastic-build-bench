'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3250<T> = T extends (infer U)[]
  ? DeepReadonlyArray3250<U>
  : T extends object
  ? DeepReadonlyObject3250<T>
  : T;

interface DeepReadonlyArray3250<T> extends ReadonlyArray<DeepReadonly3250<T>> {}

type DeepReadonlyObject3250<T> = {
  readonly [P in keyof T]: DeepReadonly3250<T[P]>;
};

type UnionToIntersection3250<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3250<T> = UnionToIntersection3250<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3250<T extends unknown[], V> = [...T, V];

type TuplifyUnion3250<T, L = LastOf3250<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3250<TuplifyUnion3250<Exclude<T, L>>, L>;

type DeepPartial3250<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3250<T[P]> }
  : T;

type Paths3250<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3250<K, Paths3250<T[K], Prev3250[D]>> : never }[keyof T]
  : never;

type Prev3250 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3250<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3250 {
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

type ConfigPaths3250 = Paths3250<NestedConfig3250>;

interface HeavyProps3250 {
  config: DeepPartial3250<NestedConfig3250>;
  path?: ConfigPaths3250;
}

const HeavyComponent3250 = memo(function HeavyComponent3250({ config }: HeavyProps3250) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3250) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3250 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3250: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3250.displayName = 'HeavyComponent3250';
export default HeavyComponent3250;
