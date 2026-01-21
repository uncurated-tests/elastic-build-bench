'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13270<T> = T extends (infer U)[]
  ? DeepReadonlyArray13270<U>
  : T extends object
  ? DeepReadonlyObject13270<T>
  : T;

interface DeepReadonlyArray13270<T> extends ReadonlyArray<DeepReadonly13270<T>> {}

type DeepReadonlyObject13270<T> = {
  readonly [P in keyof T]: DeepReadonly13270<T[P]>;
};

type UnionToIntersection13270<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13270<T> = UnionToIntersection13270<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13270<T extends unknown[], V> = [...T, V];

type TuplifyUnion13270<T, L = LastOf13270<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13270<TuplifyUnion13270<Exclude<T, L>>, L>;

type DeepPartial13270<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13270<T[P]> }
  : T;

type Paths13270<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13270<K, Paths13270<T[K], Prev13270[D]>> : never }[keyof T]
  : never;

type Prev13270 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13270<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13270 {
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

type ConfigPaths13270 = Paths13270<NestedConfig13270>;

interface HeavyProps13270 {
  config: DeepPartial13270<NestedConfig13270>;
  path?: ConfigPaths13270;
}

const HeavyComponent13270 = memo(function HeavyComponent13270({ config }: HeavyProps13270) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13270) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13270 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13270: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13270.displayName = 'HeavyComponent13270';
export default HeavyComponent13270;
