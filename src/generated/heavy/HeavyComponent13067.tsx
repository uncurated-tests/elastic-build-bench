'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13067<T> = T extends (infer U)[]
  ? DeepReadonlyArray13067<U>
  : T extends object
  ? DeepReadonlyObject13067<T>
  : T;

interface DeepReadonlyArray13067<T> extends ReadonlyArray<DeepReadonly13067<T>> {}

type DeepReadonlyObject13067<T> = {
  readonly [P in keyof T]: DeepReadonly13067<T[P]>;
};

type UnionToIntersection13067<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13067<T> = UnionToIntersection13067<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13067<T extends unknown[], V> = [...T, V];

type TuplifyUnion13067<T, L = LastOf13067<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13067<TuplifyUnion13067<Exclude<T, L>>, L>;

type DeepPartial13067<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13067<T[P]> }
  : T;

type Paths13067<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13067<K, Paths13067<T[K], Prev13067[D]>> : never }[keyof T]
  : never;

type Prev13067 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13067<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13067 {
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

type ConfigPaths13067 = Paths13067<NestedConfig13067>;

interface HeavyProps13067 {
  config: DeepPartial13067<NestedConfig13067>;
  path?: ConfigPaths13067;
}

const HeavyComponent13067 = memo(function HeavyComponent13067({ config }: HeavyProps13067) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13067) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13067 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13067: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13067.displayName = 'HeavyComponent13067';
export default HeavyComponent13067;
