'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13009<T> = T extends (infer U)[]
  ? DeepReadonlyArray13009<U>
  : T extends object
  ? DeepReadonlyObject13009<T>
  : T;

interface DeepReadonlyArray13009<T> extends ReadonlyArray<DeepReadonly13009<T>> {}

type DeepReadonlyObject13009<T> = {
  readonly [P in keyof T]: DeepReadonly13009<T[P]>;
};

type UnionToIntersection13009<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13009<T> = UnionToIntersection13009<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13009<T extends unknown[], V> = [...T, V];

type TuplifyUnion13009<T, L = LastOf13009<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13009<TuplifyUnion13009<Exclude<T, L>>, L>;

type DeepPartial13009<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13009<T[P]> }
  : T;

type Paths13009<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13009<K, Paths13009<T[K], Prev13009[D]>> : never }[keyof T]
  : never;

type Prev13009 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13009<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13009 {
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

type ConfigPaths13009 = Paths13009<NestedConfig13009>;

interface HeavyProps13009 {
  config: DeepPartial13009<NestedConfig13009>;
  path?: ConfigPaths13009;
}

const HeavyComponent13009 = memo(function HeavyComponent13009({ config }: HeavyProps13009) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13009) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13009 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13009: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13009.displayName = 'HeavyComponent13009';
export default HeavyComponent13009;
