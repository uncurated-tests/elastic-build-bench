'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13980<T> = T extends (infer U)[]
  ? DeepReadonlyArray13980<U>
  : T extends object
  ? DeepReadonlyObject13980<T>
  : T;

interface DeepReadonlyArray13980<T> extends ReadonlyArray<DeepReadonly13980<T>> {}

type DeepReadonlyObject13980<T> = {
  readonly [P in keyof T]: DeepReadonly13980<T[P]>;
};

type UnionToIntersection13980<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13980<T> = UnionToIntersection13980<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13980<T extends unknown[], V> = [...T, V];

type TuplifyUnion13980<T, L = LastOf13980<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13980<TuplifyUnion13980<Exclude<T, L>>, L>;

type DeepPartial13980<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13980<T[P]> }
  : T;

type Paths13980<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13980<K, Paths13980<T[K], Prev13980[D]>> : never }[keyof T]
  : never;

type Prev13980 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13980<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13980 {
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

type ConfigPaths13980 = Paths13980<NestedConfig13980>;

interface HeavyProps13980 {
  config: DeepPartial13980<NestedConfig13980>;
  path?: ConfigPaths13980;
}

const HeavyComponent13980 = memo(function HeavyComponent13980({ config }: HeavyProps13980) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13980) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13980 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13980: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13980.displayName = 'HeavyComponent13980';
export default HeavyComponent13980;
