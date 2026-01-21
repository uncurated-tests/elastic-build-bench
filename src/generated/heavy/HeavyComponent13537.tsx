'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13537<T> = T extends (infer U)[]
  ? DeepReadonlyArray13537<U>
  : T extends object
  ? DeepReadonlyObject13537<T>
  : T;

interface DeepReadonlyArray13537<T> extends ReadonlyArray<DeepReadonly13537<T>> {}

type DeepReadonlyObject13537<T> = {
  readonly [P in keyof T]: DeepReadonly13537<T[P]>;
};

type UnionToIntersection13537<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13537<T> = UnionToIntersection13537<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13537<T extends unknown[], V> = [...T, V];

type TuplifyUnion13537<T, L = LastOf13537<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13537<TuplifyUnion13537<Exclude<T, L>>, L>;

type DeepPartial13537<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13537<T[P]> }
  : T;

type Paths13537<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13537<K, Paths13537<T[K], Prev13537[D]>> : never }[keyof T]
  : never;

type Prev13537 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13537<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13537 {
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

type ConfigPaths13537 = Paths13537<NestedConfig13537>;

interface HeavyProps13537 {
  config: DeepPartial13537<NestedConfig13537>;
  path?: ConfigPaths13537;
}

const HeavyComponent13537 = memo(function HeavyComponent13537({ config }: HeavyProps13537) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13537) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13537 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13537: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13537.displayName = 'HeavyComponent13537';
export default HeavyComponent13537;
