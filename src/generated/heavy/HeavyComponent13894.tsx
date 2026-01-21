'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13894<T> = T extends (infer U)[]
  ? DeepReadonlyArray13894<U>
  : T extends object
  ? DeepReadonlyObject13894<T>
  : T;

interface DeepReadonlyArray13894<T> extends ReadonlyArray<DeepReadonly13894<T>> {}

type DeepReadonlyObject13894<T> = {
  readonly [P in keyof T]: DeepReadonly13894<T[P]>;
};

type UnionToIntersection13894<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13894<T> = UnionToIntersection13894<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13894<T extends unknown[], V> = [...T, V];

type TuplifyUnion13894<T, L = LastOf13894<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13894<TuplifyUnion13894<Exclude<T, L>>, L>;

type DeepPartial13894<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13894<T[P]> }
  : T;

type Paths13894<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13894<K, Paths13894<T[K], Prev13894[D]>> : never }[keyof T]
  : never;

type Prev13894 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13894<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13894 {
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

type ConfigPaths13894 = Paths13894<NestedConfig13894>;

interface HeavyProps13894 {
  config: DeepPartial13894<NestedConfig13894>;
  path?: ConfigPaths13894;
}

const HeavyComponent13894 = memo(function HeavyComponent13894({ config }: HeavyProps13894) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13894) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13894 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13894: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13894.displayName = 'HeavyComponent13894';
export default HeavyComponent13894;
