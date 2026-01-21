'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13536<T> = T extends (infer U)[]
  ? DeepReadonlyArray13536<U>
  : T extends object
  ? DeepReadonlyObject13536<T>
  : T;

interface DeepReadonlyArray13536<T> extends ReadonlyArray<DeepReadonly13536<T>> {}

type DeepReadonlyObject13536<T> = {
  readonly [P in keyof T]: DeepReadonly13536<T[P]>;
};

type UnionToIntersection13536<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13536<T> = UnionToIntersection13536<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13536<T extends unknown[], V> = [...T, V];

type TuplifyUnion13536<T, L = LastOf13536<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13536<TuplifyUnion13536<Exclude<T, L>>, L>;

type DeepPartial13536<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13536<T[P]> }
  : T;

type Paths13536<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13536<K, Paths13536<T[K], Prev13536[D]>> : never }[keyof T]
  : never;

type Prev13536 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13536<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13536 {
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

type ConfigPaths13536 = Paths13536<NestedConfig13536>;

interface HeavyProps13536 {
  config: DeepPartial13536<NestedConfig13536>;
  path?: ConfigPaths13536;
}

const HeavyComponent13536 = memo(function HeavyComponent13536({ config }: HeavyProps13536) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13536) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13536 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13536: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13536.displayName = 'HeavyComponent13536';
export default HeavyComponent13536;
