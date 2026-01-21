'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13865<T> = T extends (infer U)[]
  ? DeepReadonlyArray13865<U>
  : T extends object
  ? DeepReadonlyObject13865<T>
  : T;

interface DeepReadonlyArray13865<T> extends ReadonlyArray<DeepReadonly13865<T>> {}

type DeepReadonlyObject13865<T> = {
  readonly [P in keyof T]: DeepReadonly13865<T[P]>;
};

type UnionToIntersection13865<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13865<T> = UnionToIntersection13865<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13865<T extends unknown[], V> = [...T, V];

type TuplifyUnion13865<T, L = LastOf13865<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13865<TuplifyUnion13865<Exclude<T, L>>, L>;

type DeepPartial13865<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13865<T[P]> }
  : T;

type Paths13865<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13865<K, Paths13865<T[K], Prev13865[D]>> : never }[keyof T]
  : never;

type Prev13865 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13865<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13865 {
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

type ConfigPaths13865 = Paths13865<NestedConfig13865>;

interface HeavyProps13865 {
  config: DeepPartial13865<NestedConfig13865>;
  path?: ConfigPaths13865;
}

const HeavyComponent13865 = memo(function HeavyComponent13865({ config }: HeavyProps13865) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13865) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13865 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13865: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13865.displayName = 'HeavyComponent13865';
export default HeavyComponent13865;
