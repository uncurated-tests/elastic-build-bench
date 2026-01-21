'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3937<T> = T extends (infer U)[]
  ? DeepReadonlyArray3937<U>
  : T extends object
  ? DeepReadonlyObject3937<T>
  : T;

interface DeepReadonlyArray3937<T> extends ReadonlyArray<DeepReadonly3937<T>> {}

type DeepReadonlyObject3937<T> = {
  readonly [P in keyof T]: DeepReadonly3937<T[P]>;
};

type UnionToIntersection3937<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3937<T> = UnionToIntersection3937<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3937<T extends unknown[], V> = [...T, V];

type TuplifyUnion3937<T, L = LastOf3937<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3937<TuplifyUnion3937<Exclude<T, L>>, L>;

type DeepPartial3937<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3937<T[P]> }
  : T;

type Paths3937<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3937<K, Paths3937<T[K], Prev3937[D]>> : never }[keyof T]
  : never;

type Prev3937 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3937<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3937 {
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

type ConfigPaths3937 = Paths3937<NestedConfig3937>;

interface HeavyProps3937 {
  config: DeepPartial3937<NestedConfig3937>;
  path?: ConfigPaths3937;
}

const HeavyComponent3937 = memo(function HeavyComponent3937({ config }: HeavyProps3937) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3937) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3937 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3937: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3937.displayName = 'HeavyComponent3937';
export default HeavyComponent3937;
