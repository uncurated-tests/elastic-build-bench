'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13939<T> = T extends (infer U)[]
  ? DeepReadonlyArray13939<U>
  : T extends object
  ? DeepReadonlyObject13939<T>
  : T;

interface DeepReadonlyArray13939<T> extends ReadonlyArray<DeepReadonly13939<T>> {}

type DeepReadonlyObject13939<T> = {
  readonly [P in keyof T]: DeepReadonly13939<T[P]>;
};

type UnionToIntersection13939<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13939<T> = UnionToIntersection13939<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13939<T extends unknown[], V> = [...T, V];

type TuplifyUnion13939<T, L = LastOf13939<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13939<TuplifyUnion13939<Exclude<T, L>>, L>;

type DeepPartial13939<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13939<T[P]> }
  : T;

type Paths13939<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13939<K, Paths13939<T[K], Prev13939[D]>> : never }[keyof T]
  : never;

type Prev13939 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13939<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13939 {
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

type ConfigPaths13939 = Paths13939<NestedConfig13939>;

interface HeavyProps13939 {
  config: DeepPartial13939<NestedConfig13939>;
  path?: ConfigPaths13939;
}

const HeavyComponent13939 = memo(function HeavyComponent13939({ config }: HeavyProps13939) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13939) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13939 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13939: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13939.displayName = 'HeavyComponent13939';
export default HeavyComponent13939;
