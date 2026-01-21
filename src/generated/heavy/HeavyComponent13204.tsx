'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13204<T> = T extends (infer U)[]
  ? DeepReadonlyArray13204<U>
  : T extends object
  ? DeepReadonlyObject13204<T>
  : T;

interface DeepReadonlyArray13204<T> extends ReadonlyArray<DeepReadonly13204<T>> {}

type DeepReadonlyObject13204<T> = {
  readonly [P in keyof T]: DeepReadonly13204<T[P]>;
};

type UnionToIntersection13204<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13204<T> = UnionToIntersection13204<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13204<T extends unknown[], V> = [...T, V];

type TuplifyUnion13204<T, L = LastOf13204<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13204<TuplifyUnion13204<Exclude<T, L>>, L>;

type DeepPartial13204<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13204<T[P]> }
  : T;

type Paths13204<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13204<K, Paths13204<T[K], Prev13204[D]>> : never }[keyof T]
  : never;

type Prev13204 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13204<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13204 {
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

type ConfigPaths13204 = Paths13204<NestedConfig13204>;

interface HeavyProps13204 {
  config: DeepPartial13204<NestedConfig13204>;
  path?: ConfigPaths13204;
}

const HeavyComponent13204 = memo(function HeavyComponent13204({ config }: HeavyProps13204) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13204) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13204 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13204: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13204.displayName = 'HeavyComponent13204';
export default HeavyComponent13204;
