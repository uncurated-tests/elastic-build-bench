'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13077<T> = T extends (infer U)[]
  ? DeepReadonlyArray13077<U>
  : T extends object
  ? DeepReadonlyObject13077<T>
  : T;

interface DeepReadonlyArray13077<T> extends ReadonlyArray<DeepReadonly13077<T>> {}

type DeepReadonlyObject13077<T> = {
  readonly [P in keyof T]: DeepReadonly13077<T[P]>;
};

type UnionToIntersection13077<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13077<T> = UnionToIntersection13077<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13077<T extends unknown[], V> = [...T, V];

type TuplifyUnion13077<T, L = LastOf13077<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13077<TuplifyUnion13077<Exclude<T, L>>, L>;

type DeepPartial13077<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13077<T[P]> }
  : T;

type Paths13077<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13077<K, Paths13077<T[K], Prev13077[D]>> : never }[keyof T]
  : never;

type Prev13077 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13077<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13077 {
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

type ConfigPaths13077 = Paths13077<NestedConfig13077>;

interface HeavyProps13077 {
  config: DeepPartial13077<NestedConfig13077>;
  path?: ConfigPaths13077;
}

const HeavyComponent13077 = memo(function HeavyComponent13077({ config }: HeavyProps13077) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13077) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13077 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13077: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13077.displayName = 'HeavyComponent13077';
export default HeavyComponent13077;
