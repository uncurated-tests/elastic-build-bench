'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13591<T> = T extends (infer U)[]
  ? DeepReadonlyArray13591<U>
  : T extends object
  ? DeepReadonlyObject13591<T>
  : T;

interface DeepReadonlyArray13591<T> extends ReadonlyArray<DeepReadonly13591<T>> {}

type DeepReadonlyObject13591<T> = {
  readonly [P in keyof T]: DeepReadonly13591<T[P]>;
};

type UnionToIntersection13591<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13591<T> = UnionToIntersection13591<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13591<T extends unknown[], V> = [...T, V];

type TuplifyUnion13591<T, L = LastOf13591<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13591<TuplifyUnion13591<Exclude<T, L>>, L>;

type DeepPartial13591<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13591<T[P]> }
  : T;

type Paths13591<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13591<K, Paths13591<T[K], Prev13591[D]>> : never }[keyof T]
  : never;

type Prev13591 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13591<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13591 {
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

type ConfigPaths13591 = Paths13591<NestedConfig13591>;

interface HeavyProps13591 {
  config: DeepPartial13591<NestedConfig13591>;
  path?: ConfigPaths13591;
}

const HeavyComponent13591 = memo(function HeavyComponent13591({ config }: HeavyProps13591) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13591) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13591 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13591: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13591.displayName = 'HeavyComponent13591';
export default HeavyComponent13591;
