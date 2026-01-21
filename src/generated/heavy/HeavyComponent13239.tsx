'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13239<T> = T extends (infer U)[]
  ? DeepReadonlyArray13239<U>
  : T extends object
  ? DeepReadonlyObject13239<T>
  : T;

interface DeepReadonlyArray13239<T> extends ReadonlyArray<DeepReadonly13239<T>> {}

type DeepReadonlyObject13239<T> = {
  readonly [P in keyof T]: DeepReadonly13239<T[P]>;
};

type UnionToIntersection13239<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13239<T> = UnionToIntersection13239<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13239<T extends unknown[], V> = [...T, V];

type TuplifyUnion13239<T, L = LastOf13239<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13239<TuplifyUnion13239<Exclude<T, L>>, L>;

type DeepPartial13239<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13239<T[P]> }
  : T;

type Paths13239<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13239<K, Paths13239<T[K], Prev13239[D]>> : never }[keyof T]
  : never;

type Prev13239 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13239<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13239 {
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

type ConfigPaths13239 = Paths13239<NestedConfig13239>;

interface HeavyProps13239 {
  config: DeepPartial13239<NestedConfig13239>;
  path?: ConfigPaths13239;
}

const HeavyComponent13239 = memo(function HeavyComponent13239({ config }: HeavyProps13239) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13239) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13239 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13239: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13239.displayName = 'HeavyComponent13239';
export default HeavyComponent13239;
