'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13745<T> = T extends (infer U)[]
  ? DeepReadonlyArray13745<U>
  : T extends object
  ? DeepReadonlyObject13745<T>
  : T;

interface DeepReadonlyArray13745<T> extends ReadonlyArray<DeepReadonly13745<T>> {}

type DeepReadonlyObject13745<T> = {
  readonly [P in keyof T]: DeepReadonly13745<T[P]>;
};

type UnionToIntersection13745<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13745<T> = UnionToIntersection13745<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13745<T extends unknown[], V> = [...T, V];

type TuplifyUnion13745<T, L = LastOf13745<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13745<TuplifyUnion13745<Exclude<T, L>>, L>;

type DeepPartial13745<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13745<T[P]> }
  : T;

type Paths13745<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13745<K, Paths13745<T[K], Prev13745[D]>> : never }[keyof T]
  : never;

type Prev13745 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13745<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13745 {
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

type ConfigPaths13745 = Paths13745<NestedConfig13745>;

interface HeavyProps13745 {
  config: DeepPartial13745<NestedConfig13745>;
  path?: ConfigPaths13745;
}

const HeavyComponent13745 = memo(function HeavyComponent13745({ config }: HeavyProps13745) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13745) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13745 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13745: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13745.displayName = 'HeavyComponent13745';
export default HeavyComponent13745;
