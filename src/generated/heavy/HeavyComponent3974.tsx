'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3974<T> = T extends (infer U)[]
  ? DeepReadonlyArray3974<U>
  : T extends object
  ? DeepReadonlyObject3974<T>
  : T;

interface DeepReadonlyArray3974<T> extends ReadonlyArray<DeepReadonly3974<T>> {}

type DeepReadonlyObject3974<T> = {
  readonly [P in keyof T]: DeepReadonly3974<T[P]>;
};

type UnionToIntersection3974<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3974<T> = UnionToIntersection3974<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3974<T extends unknown[], V> = [...T, V];

type TuplifyUnion3974<T, L = LastOf3974<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3974<TuplifyUnion3974<Exclude<T, L>>, L>;

type DeepPartial3974<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3974<T[P]> }
  : T;

type Paths3974<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3974<K, Paths3974<T[K], Prev3974[D]>> : never }[keyof T]
  : never;

type Prev3974 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3974<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3974 {
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

type ConfigPaths3974 = Paths3974<NestedConfig3974>;

interface HeavyProps3974 {
  config: DeepPartial3974<NestedConfig3974>;
  path?: ConfigPaths3974;
}

const HeavyComponent3974 = memo(function HeavyComponent3974({ config }: HeavyProps3974) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3974) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3974 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3974: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3974.displayName = 'HeavyComponent3974';
export default HeavyComponent3974;
