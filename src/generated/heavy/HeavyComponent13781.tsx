'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13781<T> = T extends (infer U)[]
  ? DeepReadonlyArray13781<U>
  : T extends object
  ? DeepReadonlyObject13781<T>
  : T;

interface DeepReadonlyArray13781<T> extends ReadonlyArray<DeepReadonly13781<T>> {}

type DeepReadonlyObject13781<T> = {
  readonly [P in keyof T]: DeepReadonly13781<T[P]>;
};

type UnionToIntersection13781<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13781<T> = UnionToIntersection13781<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13781<T extends unknown[], V> = [...T, V];

type TuplifyUnion13781<T, L = LastOf13781<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13781<TuplifyUnion13781<Exclude<T, L>>, L>;

type DeepPartial13781<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13781<T[P]> }
  : T;

type Paths13781<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13781<K, Paths13781<T[K], Prev13781[D]>> : never }[keyof T]
  : never;

type Prev13781 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13781<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13781 {
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

type ConfigPaths13781 = Paths13781<NestedConfig13781>;

interface HeavyProps13781 {
  config: DeepPartial13781<NestedConfig13781>;
  path?: ConfigPaths13781;
}

const HeavyComponent13781 = memo(function HeavyComponent13781({ config }: HeavyProps13781) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13781) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13781 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13781: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13781.displayName = 'HeavyComponent13781';
export default HeavyComponent13781;
