'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13164<T> = T extends (infer U)[]
  ? DeepReadonlyArray13164<U>
  : T extends object
  ? DeepReadonlyObject13164<T>
  : T;

interface DeepReadonlyArray13164<T> extends ReadonlyArray<DeepReadonly13164<T>> {}

type DeepReadonlyObject13164<T> = {
  readonly [P in keyof T]: DeepReadonly13164<T[P]>;
};

type UnionToIntersection13164<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13164<T> = UnionToIntersection13164<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13164<T extends unknown[], V> = [...T, V];

type TuplifyUnion13164<T, L = LastOf13164<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13164<TuplifyUnion13164<Exclude<T, L>>, L>;

type DeepPartial13164<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13164<T[P]> }
  : T;

type Paths13164<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13164<K, Paths13164<T[K], Prev13164[D]>> : never }[keyof T]
  : never;

type Prev13164 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13164<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13164 {
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

type ConfigPaths13164 = Paths13164<NestedConfig13164>;

interface HeavyProps13164 {
  config: DeepPartial13164<NestedConfig13164>;
  path?: ConfigPaths13164;
}

const HeavyComponent13164 = memo(function HeavyComponent13164({ config }: HeavyProps13164) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13164) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13164 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13164: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13164.displayName = 'HeavyComponent13164';
export default HeavyComponent13164;
