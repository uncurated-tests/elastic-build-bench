'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13766<T> = T extends (infer U)[]
  ? DeepReadonlyArray13766<U>
  : T extends object
  ? DeepReadonlyObject13766<T>
  : T;

interface DeepReadonlyArray13766<T> extends ReadonlyArray<DeepReadonly13766<T>> {}

type DeepReadonlyObject13766<T> = {
  readonly [P in keyof T]: DeepReadonly13766<T[P]>;
};

type UnionToIntersection13766<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13766<T> = UnionToIntersection13766<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13766<T extends unknown[], V> = [...T, V];

type TuplifyUnion13766<T, L = LastOf13766<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13766<TuplifyUnion13766<Exclude<T, L>>, L>;

type DeepPartial13766<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13766<T[P]> }
  : T;

type Paths13766<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13766<K, Paths13766<T[K], Prev13766[D]>> : never }[keyof T]
  : never;

type Prev13766 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13766<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13766 {
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

type ConfigPaths13766 = Paths13766<NestedConfig13766>;

interface HeavyProps13766 {
  config: DeepPartial13766<NestedConfig13766>;
  path?: ConfigPaths13766;
}

const HeavyComponent13766 = memo(function HeavyComponent13766({ config }: HeavyProps13766) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13766) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13766 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13766: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13766.displayName = 'HeavyComponent13766';
export default HeavyComponent13766;
