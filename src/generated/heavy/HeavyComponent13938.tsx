'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13938<T> = T extends (infer U)[]
  ? DeepReadonlyArray13938<U>
  : T extends object
  ? DeepReadonlyObject13938<T>
  : T;

interface DeepReadonlyArray13938<T> extends ReadonlyArray<DeepReadonly13938<T>> {}

type DeepReadonlyObject13938<T> = {
  readonly [P in keyof T]: DeepReadonly13938<T[P]>;
};

type UnionToIntersection13938<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13938<T> = UnionToIntersection13938<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13938<T extends unknown[], V> = [...T, V];

type TuplifyUnion13938<T, L = LastOf13938<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13938<TuplifyUnion13938<Exclude<T, L>>, L>;

type DeepPartial13938<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13938<T[P]> }
  : T;

type Paths13938<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13938<K, Paths13938<T[K], Prev13938[D]>> : never }[keyof T]
  : never;

type Prev13938 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13938<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13938 {
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

type ConfigPaths13938 = Paths13938<NestedConfig13938>;

interface HeavyProps13938 {
  config: DeepPartial13938<NestedConfig13938>;
  path?: ConfigPaths13938;
}

const HeavyComponent13938 = memo(function HeavyComponent13938({ config }: HeavyProps13938) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13938) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13938 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13938: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13938.displayName = 'HeavyComponent13938';
export default HeavyComponent13938;
