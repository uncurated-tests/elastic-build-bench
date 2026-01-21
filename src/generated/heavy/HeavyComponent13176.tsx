'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13176<T> = T extends (infer U)[]
  ? DeepReadonlyArray13176<U>
  : T extends object
  ? DeepReadonlyObject13176<T>
  : T;

interface DeepReadonlyArray13176<T> extends ReadonlyArray<DeepReadonly13176<T>> {}

type DeepReadonlyObject13176<T> = {
  readonly [P in keyof T]: DeepReadonly13176<T[P]>;
};

type UnionToIntersection13176<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13176<T> = UnionToIntersection13176<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13176<T extends unknown[], V> = [...T, V];

type TuplifyUnion13176<T, L = LastOf13176<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13176<TuplifyUnion13176<Exclude<T, L>>, L>;

type DeepPartial13176<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13176<T[P]> }
  : T;

type Paths13176<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13176<K, Paths13176<T[K], Prev13176[D]>> : never }[keyof T]
  : never;

type Prev13176 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13176<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13176 {
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

type ConfigPaths13176 = Paths13176<NestedConfig13176>;

interface HeavyProps13176 {
  config: DeepPartial13176<NestedConfig13176>;
  path?: ConfigPaths13176;
}

const HeavyComponent13176 = memo(function HeavyComponent13176({ config }: HeavyProps13176) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13176) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13176 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13176: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13176.displayName = 'HeavyComponent13176';
export default HeavyComponent13176;
