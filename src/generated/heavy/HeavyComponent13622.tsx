'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13622<T> = T extends (infer U)[]
  ? DeepReadonlyArray13622<U>
  : T extends object
  ? DeepReadonlyObject13622<T>
  : T;

interface DeepReadonlyArray13622<T> extends ReadonlyArray<DeepReadonly13622<T>> {}

type DeepReadonlyObject13622<T> = {
  readonly [P in keyof T]: DeepReadonly13622<T[P]>;
};

type UnionToIntersection13622<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13622<T> = UnionToIntersection13622<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13622<T extends unknown[], V> = [...T, V];

type TuplifyUnion13622<T, L = LastOf13622<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13622<TuplifyUnion13622<Exclude<T, L>>, L>;

type DeepPartial13622<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13622<T[P]> }
  : T;

type Paths13622<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13622<K, Paths13622<T[K], Prev13622[D]>> : never }[keyof T]
  : never;

type Prev13622 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13622<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13622 {
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

type ConfigPaths13622 = Paths13622<NestedConfig13622>;

interface HeavyProps13622 {
  config: DeepPartial13622<NestedConfig13622>;
  path?: ConfigPaths13622;
}

const HeavyComponent13622 = memo(function HeavyComponent13622({ config }: HeavyProps13622) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13622) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13622 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13622: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13622.displayName = 'HeavyComponent13622';
export default HeavyComponent13622;
