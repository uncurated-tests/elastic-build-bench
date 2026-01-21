'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3975<T> = T extends (infer U)[]
  ? DeepReadonlyArray3975<U>
  : T extends object
  ? DeepReadonlyObject3975<T>
  : T;

interface DeepReadonlyArray3975<T> extends ReadonlyArray<DeepReadonly3975<T>> {}

type DeepReadonlyObject3975<T> = {
  readonly [P in keyof T]: DeepReadonly3975<T[P]>;
};

type UnionToIntersection3975<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3975<T> = UnionToIntersection3975<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3975<T extends unknown[], V> = [...T, V];

type TuplifyUnion3975<T, L = LastOf3975<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3975<TuplifyUnion3975<Exclude<T, L>>, L>;

type DeepPartial3975<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3975<T[P]> }
  : T;

type Paths3975<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3975<K, Paths3975<T[K], Prev3975[D]>> : never }[keyof T]
  : never;

type Prev3975 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3975<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3975 {
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

type ConfigPaths3975 = Paths3975<NestedConfig3975>;

interface HeavyProps3975 {
  config: DeepPartial3975<NestedConfig3975>;
  path?: ConfigPaths3975;
}

const HeavyComponent3975 = memo(function HeavyComponent3975({ config }: HeavyProps3975) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3975) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3975 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3975: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3975.displayName = 'HeavyComponent3975';
export default HeavyComponent3975;
