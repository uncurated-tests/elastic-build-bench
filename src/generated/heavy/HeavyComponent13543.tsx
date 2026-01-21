'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13543<T> = T extends (infer U)[]
  ? DeepReadonlyArray13543<U>
  : T extends object
  ? DeepReadonlyObject13543<T>
  : T;

interface DeepReadonlyArray13543<T> extends ReadonlyArray<DeepReadonly13543<T>> {}

type DeepReadonlyObject13543<T> = {
  readonly [P in keyof T]: DeepReadonly13543<T[P]>;
};

type UnionToIntersection13543<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13543<T> = UnionToIntersection13543<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13543<T extends unknown[], V> = [...T, V];

type TuplifyUnion13543<T, L = LastOf13543<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13543<TuplifyUnion13543<Exclude<T, L>>, L>;

type DeepPartial13543<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13543<T[P]> }
  : T;

type Paths13543<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13543<K, Paths13543<T[K], Prev13543[D]>> : never }[keyof T]
  : never;

type Prev13543 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13543<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13543 {
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

type ConfigPaths13543 = Paths13543<NestedConfig13543>;

interface HeavyProps13543 {
  config: DeepPartial13543<NestedConfig13543>;
  path?: ConfigPaths13543;
}

const HeavyComponent13543 = memo(function HeavyComponent13543({ config }: HeavyProps13543) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13543) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13543 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13543: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13543.displayName = 'HeavyComponent13543';
export default HeavyComponent13543;
