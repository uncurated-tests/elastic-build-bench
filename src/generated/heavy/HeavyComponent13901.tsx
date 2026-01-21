'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13901<T> = T extends (infer U)[]
  ? DeepReadonlyArray13901<U>
  : T extends object
  ? DeepReadonlyObject13901<T>
  : T;

interface DeepReadonlyArray13901<T> extends ReadonlyArray<DeepReadonly13901<T>> {}

type DeepReadonlyObject13901<T> = {
  readonly [P in keyof T]: DeepReadonly13901<T[P]>;
};

type UnionToIntersection13901<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13901<T> = UnionToIntersection13901<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13901<T extends unknown[], V> = [...T, V];

type TuplifyUnion13901<T, L = LastOf13901<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13901<TuplifyUnion13901<Exclude<T, L>>, L>;

type DeepPartial13901<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13901<T[P]> }
  : T;

type Paths13901<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13901<K, Paths13901<T[K], Prev13901[D]>> : never }[keyof T]
  : never;

type Prev13901 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13901<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13901 {
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

type ConfigPaths13901 = Paths13901<NestedConfig13901>;

interface HeavyProps13901 {
  config: DeepPartial13901<NestedConfig13901>;
  path?: ConfigPaths13901;
}

const HeavyComponent13901 = memo(function HeavyComponent13901({ config }: HeavyProps13901) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13901) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13901 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13901: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13901.displayName = 'HeavyComponent13901';
export default HeavyComponent13901;
