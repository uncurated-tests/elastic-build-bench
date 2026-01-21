'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13373<T> = T extends (infer U)[]
  ? DeepReadonlyArray13373<U>
  : T extends object
  ? DeepReadonlyObject13373<T>
  : T;

interface DeepReadonlyArray13373<T> extends ReadonlyArray<DeepReadonly13373<T>> {}

type DeepReadonlyObject13373<T> = {
  readonly [P in keyof T]: DeepReadonly13373<T[P]>;
};

type UnionToIntersection13373<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13373<T> = UnionToIntersection13373<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13373<T extends unknown[], V> = [...T, V];

type TuplifyUnion13373<T, L = LastOf13373<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13373<TuplifyUnion13373<Exclude<T, L>>, L>;

type DeepPartial13373<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13373<T[P]> }
  : T;

type Paths13373<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13373<K, Paths13373<T[K], Prev13373[D]>> : never }[keyof T]
  : never;

type Prev13373 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13373<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13373 {
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

type ConfigPaths13373 = Paths13373<NestedConfig13373>;

interface HeavyProps13373 {
  config: DeepPartial13373<NestedConfig13373>;
  path?: ConfigPaths13373;
}

const HeavyComponent13373 = memo(function HeavyComponent13373({ config }: HeavyProps13373) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13373) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13373 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13373: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13373.displayName = 'HeavyComponent13373';
export default HeavyComponent13373;
