'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13576<T> = T extends (infer U)[]
  ? DeepReadonlyArray13576<U>
  : T extends object
  ? DeepReadonlyObject13576<T>
  : T;

interface DeepReadonlyArray13576<T> extends ReadonlyArray<DeepReadonly13576<T>> {}

type DeepReadonlyObject13576<T> = {
  readonly [P in keyof T]: DeepReadonly13576<T[P]>;
};

type UnionToIntersection13576<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13576<T> = UnionToIntersection13576<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13576<T extends unknown[], V> = [...T, V];

type TuplifyUnion13576<T, L = LastOf13576<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13576<TuplifyUnion13576<Exclude<T, L>>, L>;

type DeepPartial13576<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13576<T[P]> }
  : T;

type Paths13576<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13576<K, Paths13576<T[K], Prev13576[D]>> : never }[keyof T]
  : never;

type Prev13576 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13576<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13576 {
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

type ConfigPaths13576 = Paths13576<NestedConfig13576>;

interface HeavyProps13576 {
  config: DeepPartial13576<NestedConfig13576>;
  path?: ConfigPaths13576;
}

const HeavyComponent13576 = memo(function HeavyComponent13576({ config }: HeavyProps13576) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13576) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13576 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13576: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13576.displayName = 'HeavyComponent13576';
export default HeavyComponent13576;
