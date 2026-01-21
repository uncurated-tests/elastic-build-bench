'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly3096<T> = T extends (infer U)[]
  ? DeepReadonlyArray3096<U>
  : T extends object
  ? DeepReadonlyObject3096<T>
  : T;

interface DeepReadonlyArray3096<T> extends ReadonlyArray<DeepReadonly3096<T>> {}

type DeepReadonlyObject3096<T> = {
  readonly [P in keyof T]: DeepReadonly3096<T[P]>;
};

type UnionToIntersection3096<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf3096<T> = UnionToIntersection3096<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push3096<T extends unknown[], V> = [...T, V];

type TuplifyUnion3096<T, L = LastOf3096<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push3096<TuplifyUnion3096<Exclude<T, L>>, L>;

type DeepPartial3096<T> = T extends object
  ? { [P in keyof T]?: DeepPartial3096<T[P]> }
  : T;

type Paths3096<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join3096<K, Paths3096<T[K], Prev3096[D]>> : never }[keyof T]
  : never;

type Prev3096 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join3096<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig3096 {
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

type ConfigPaths3096 = Paths3096<NestedConfig3096>;

interface HeavyProps3096 {
  config: DeepPartial3096<NestedConfig3096>;
  path?: ConfigPaths3096;
}

const HeavyComponent3096 = memo(function HeavyComponent3096({ config }: HeavyProps3096) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 3096) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-3096 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H3096: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent3096.displayName = 'HeavyComponent3096';
export default HeavyComponent3096;
