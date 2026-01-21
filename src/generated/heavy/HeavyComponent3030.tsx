'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3030<T> = T extends (infer U)[]
  ? DeepReadonlyArray3030<U>
  : T extends object
  ? DeepReadonlyObject3030<T>
  : T;

interface DeepReadonlyArray3030<T> extends ReadonlyArray<DeepReadonly3030<T>> {}

type DeepReadonlyObject3030<T> = {
  readonly [P in keyof T]: DeepReadonly3030<T[P]>;
};

type UnionToIntersection3030<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3030<T> = UnionToIntersection3030<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3030<T extends unknown[], V> = [...T, V];

type TuplifyUnion3030<T, L = LastOf3030<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3030<TuplifyUnion3030<Exclude<T, L>>, L>;

type DeepPartial3030<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3030<T[P]> }
  : T;

type Paths3030<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3030<K, Paths3030<T[K], Prev3030[D]>> : never }[keyof T]
  : never;

type Prev3030 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3030<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3030 {
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

type ConfigPaths3030 = Paths3030<NestedConfig3030>;

interface HeavyProps3030 {
  config: DeepPartial3030<NestedConfig3030>;
  path?: ConfigPaths3030;
}

const HeavyComponent3030 = memo(function HeavyComponent3030({ config }: HeavyProps3030) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3030) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3030 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3030: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3030.displayName = 'HeavyComponent3030';
export default HeavyComponent3030;
