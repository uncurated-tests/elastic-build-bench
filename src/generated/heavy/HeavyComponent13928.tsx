'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13928<T> = T extends (infer U)[]
  ? DeepReadonlyArray13928<U>
  : T extends object
  ? DeepReadonlyObject13928<T>
  : T;

interface DeepReadonlyArray13928<T> extends ReadonlyArray<DeepReadonly13928<T>> {}

type DeepReadonlyObject13928<T> = {
  readonly [P in keyof T]: DeepReadonly13928<T[P]>;
};

type UnionToIntersection13928<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13928<T> = UnionToIntersection13928<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13928<T extends unknown[], V> = [...T, V];

type TuplifyUnion13928<T, L = LastOf13928<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13928<TuplifyUnion13928<Exclude<T, L>>, L>;

type DeepPartial13928<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13928<T[P]> }
  : T;

type Paths13928<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13928<K, Paths13928<T[K], Prev13928[D]>> : never }[keyof T]
  : never;

type Prev13928 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13928<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13928 {
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

type ConfigPaths13928 = Paths13928<NestedConfig13928>;

interface HeavyProps13928 {
  config: DeepPartial13928<NestedConfig13928>;
  path?: ConfigPaths13928;
}

const HeavyComponent13928 = memo(function HeavyComponent13928({ config }: HeavyProps13928) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13928) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13928 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13928: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13928.displayName = 'HeavyComponent13928';
export default HeavyComponent13928;
