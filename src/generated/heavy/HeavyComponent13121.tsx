'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13121<T> = T extends (infer U)[]
  ? DeepReadonlyArray13121<U>
  : T extends object
  ? DeepReadonlyObject13121<T>
  : T;

interface DeepReadonlyArray13121<T> extends ReadonlyArray<DeepReadonly13121<T>> {}

type DeepReadonlyObject13121<T> = {
  readonly [P in keyof T]: DeepReadonly13121<T[P]>;
};

type UnionToIntersection13121<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13121<T> = UnionToIntersection13121<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13121<T extends unknown[], V> = [...T, V];

type TuplifyUnion13121<T, L = LastOf13121<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13121<TuplifyUnion13121<Exclude<T, L>>, L>;

type DeepPartial13121<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13121<T[P]> }
  : T;

type Paths13121<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13121<K, Paths13121<T[K], Prev13121[D]>> : never }[keyof T]
  : never;

type Prev13121 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13121<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13121 {
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

type ConfigPaths13121 = Paths13121<NestedConfig13121>;

interface HeavyProps13121 {
  config: DeepPartial13121<NestedConfig13121>;
  path?: ConfigPaths13121;
}

const HeavyComponent13121 = memo(function HeavyComponent13121({ config }: HeavyProps13121) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13121) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13121 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13121: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13121.displayName = 'HeavyComponent13121';
export default HeavyComponent13121;
