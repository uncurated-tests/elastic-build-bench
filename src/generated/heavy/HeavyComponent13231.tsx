'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13231<T> = T extends (infer U)[]
  ? DeepReadonlyArray13231<U>
  : T extends object
  ? DeepReadonlyObject13231<T>
  : T;

interface DeepReadonlyArray13231<T> extends ReadonlyArray<DeepReadonly13231<T>> {}

type DeepReadonlyObject13231<T> = {
  readonly [P in keyof T]: DeepReadonly13231<T[P]>;
};

type UnionToIntersection13231<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13231<T> = UnionToIntersection13231<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13231<T extends unknown[], V> = [...T, V];

type TuplifyUnion13231<T, L = LastOf13231<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13231<TuplifyUnion13231<Exclude<T, L>>, L>;

type DeepPartial13231<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13231<T[P]> }
  : T;

type Paths13231<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13231<K, Paths13231<T[K], Prev13231[D]>> : never }[keyof T]
  : never;

type Prev13231 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13231<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13231 {
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

type ConfigPaths13231 = Paths13231<NestedConfig13231>;

interface HeavyProps13231 {
  config: DeepPartial13231<NestedConfig13231>;
  path?: ConfigPaths13231;
}

const HeavyComponent13231 = memo(function HeavyComponent13231({ config }: HeavyProps13231) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13231) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13231 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13231: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13231.displayName = 'HeavyComponent13231';
export default HeavyComponent13231;
