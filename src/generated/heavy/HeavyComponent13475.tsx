'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13475<T> = T extends (infer U)[]
  ? DeepReadonlyArray13475<U>
  : T extends object
  ? DeepReadonlyObject13475<T>
  : T;

interface DeepReadonlyArray13475<T> extends ReadonlyArray<DeepReadonly13475<T>> {}

type DeepReadonlyObject13475<T> = {
  readonly [P in keyof T]: DeepReadonly13475<T[P]>;
};

type UnionToIntersection13475<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13475<T> = UnionToIntersection13475<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13475<T extends unknown[], V> = [...T, V];

type TuplifyUnion13475<T, L = LastOf13475<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13475<TuplifyUnion13475<Exclude<T, L>>, L>;

type DeepPartial13475<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13475<T[P]> }
  : T;

type Paths13475<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13475<K, Paths13475<T[K], Prev13475[D]>> : never }[keyof T]
  : never;

type Prev13475 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13475<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13475 {
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

type ConfigPaths13475 = Paths13475<NestedConfig13475>;

interface HeavyProps13475 {
  config: DeepPartial13475<NestedConfig13475>;
  path?: ConfigPaths13475;
}

const HeavyComponent13475 = memo(function HeavyComponent13475({ config }: HeavyProps13475) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13475) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13475 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13475: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13475.displayName = 'HeavyComponent13475';
export default HeavyComponent13475;
