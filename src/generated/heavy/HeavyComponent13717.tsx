'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13717<T> = T extends (infer U)[]
  ? DeepReadonlyArray13717<U>
  : T extends object
  ? DeepReadonlyObject13717<T>
  : T;

interface DeepReadonlyArray13717<T> extends ReadonlyArray<DeepReadonly13717<T>> {}

type DeepReadonlyObject13717<T> = {
  readonly [P in keyof T]: DeepReadonly13717<T[P]>;
};

type UnionToIntersection13717<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13717<T> = UnionToIntersection13717<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13717<T extends unknown[], V> = [...T, V];

type TuplifyUnion13717<T, L = LastOf13717<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13717<TuplifyUnion13717<Exclude<T, L>>, L>;

type DeepPartial13717<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13717<T[P]> }
  : T;

type Paths13717<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13717<K, Paths13717<T[K], Prev13717[D]>> : never }[keyof T]
  : never;

type Prev13717 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13717<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13717 {
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

type ConfigPaths13717 = Paths13717<NestedConfig13717>;

interface HeavyProps13717 {
  config: DeepPartial13717<NestedConfig13717>;
  path?: ConfigPaths13717;
}

const HeavyComponent13717 = memo(function HeavyComponent13717({ config }: HeavyProps13717) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13717) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13717 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13717: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13717.displayName = 'HeavyComponent13717';
export default HeavyComponent13717;
