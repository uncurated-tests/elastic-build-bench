'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13307<T> = T extends (infer U)[]
  ? DeepReadonlyArray13307<U>
  : T extends object
  ? DeepReadonlyObject13307<T>
  : T;

interface DeepReadonlyArray13307<T> extends ReadonlyArray<DeepReadonly13307<T>> {}

type DeepReadonlyObject13307<T> = {
  readonly [P in keyof T]: DeepReadonly13307<T[P]>;
};

type UnionToIntersection13307<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13307<T> = UnionToIntersection13307<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13307<T extends unknown[], V> = [...T, V];

type TuplifyUnion13307<T, L = LastOf13307<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13307<TuplifyUnion13307<Exclude<T, L>>, L>;

type DeepPartial13307<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13307<T[P]> }
  : T;

type Paths13307<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13307<K, Paths13307<T[K], Prev13307[D]>> : never }[keyof T]
  : never;

type Prev13307 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13307<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13307 {
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

type ConfigPaths13307 = Paths13307<NestedConfig13307>;

interface HeavyProps13307 {
  config: DeepPartial13307<NestedConfig13307>;
  path?: ConfigPaths13307;
}

const HeavyComponent13307 = memo(function HeavyComponent13307({ config }: HeavyProps13307) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13307) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13307 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13307: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13307.displayName = 'HeavyComponent13307';
export default HeavyComponent13307;
