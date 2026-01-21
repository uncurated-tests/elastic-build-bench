'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13308<T> = T extends (infer U)[]
  ? DeepReadonlyArray13308<U>
  : T extends object
  ? DeepReadonlyObject13308<T>
  : T;

interface DeepReadonlyArray13308<T> extends ReadonlyArray<DeepReadonly13308<T>> {}

type DeepReadonlyObject13308<T> = {
  readonly [P in keyof T]: DeepReadonly13308<T[P]>;
};

type UnionToIntersection13308<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13308<T> = UnionToIntersection13308<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13308<T extends unknown[], V> = [...T, V];

type TuplifyUnion13308<T, L = LastOf13308<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13308<TuplifyUnion13308<Exclude<T, L>>, L>;

type DeepPartial13308<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13308<T[P]> }
  : T;

type Paths13308<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13308<K, Paths13308<T[K], Prev13308[D]>> : never }[keyof T]
  : never;

type Prev13308 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13308<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13308 {
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

type ConfigPaths13308 = Paths13308<NestedConfig13308>;

interface HeavyProps13308 {
  config: DeepPartial13308<NestedConfig13308>;
  path?: ConfigPaths13308;
}

const HeavyComponent13308 = memo(function HeavyComponent13308({ config }: HeavyProps13308) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13308) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13308 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13308: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13308.displayName = 'HeavyComponent13308';
export default HeavyComponent13308;
