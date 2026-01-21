'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3657<T> = T extends (infer U)[]
  ? DeepReadonlyArray3657<U>
  : T extends object
  ? DeepReadonlyObject3657<T>
  : T;

interface DeepReadonlyArray3657<T> extends ReadonlyArray<DeepReadonly3657<T>> {}

type DeepReadonlyObject3657<T> = {
  readonly [P in keyof T]: DeepReadonly3657<T[P]>;
};

type UnionToIntersection3657<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3657<T> = UnionToIntersection3657<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3657<T extends unknown[], V> = [...T, V];

type TuplifyUnion3657<T, L = LastOf3657<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3657<TuplifyUnion3657<Exclude<T, L>>, L>;

type DeepPartial3657<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3657<T[P]> }
  : T;

type Paths3657<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3657<K, Paths3657<T[K], Prev3657[D]>> : never }[keyof T]
  : never;

type Prev3657 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3657<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3657 {
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

type ConfigPaths3657 = Paths3657<NestedConfig3657>;

interface HeavyProps3657 {
  config: DeepPartial3657<NestedConfig3657>;
  path?: ConfigPaths3657;
}

const HeavyComponent3657 = memo(function HeavyComponent3657({ config }: HeavyProps3657) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3657) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3657 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3657: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3657.displayName = 'HeavyComponent3657';
export default HeavyComponent3657;
