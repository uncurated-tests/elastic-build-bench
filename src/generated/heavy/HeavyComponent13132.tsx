'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13132<T> = T extends (infer U)[]
  ? DeepReadonlyArray13132<U>
  : T extends object
  ? DeepReadonlyObject13132<T>
  : T;

interface DeepReadonlyArray13132<T> extends ReadonlyArray<DeepReadonly13132<T>> {}

type DeepReadonlyObject13132<T> = {
  readonly [P in keyof T]: DeepReadonly13132<T[P]>;
};

type UnionToIntersection13132<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13132<T> = UnionToIntersection13132<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13132<T extends unknown[], V> = [...T, V];

type TuplifyUnion13132<T, L = LastOf13132<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13132<TuplifyUnion13132<Exclude<T, L>>, L>;

type DeepPartial13132<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13132<T[P]> }
  : T;

type Paths13132<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13132<K, Paths13132<T[K], Prev13132[D]>> : never }[keyof T]
  : never;

type Prev13132 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13132<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13132 {
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

type ConfigPaths13132 = Paths13132<NestedConfig13132>;

interface HeavyProps13132 {
  config: DeepPartial13132<NestedConfig13132>;
  path?: ConfigPaths13132;
}

const HeavyComponent13132 = memo(function HeavyComponent13132({ config }: HeavyProps13132) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13132) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13132 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13132: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13132.displayName = 'HeavyComponent13132';
export default HeavyComponent13132;
