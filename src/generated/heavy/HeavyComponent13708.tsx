'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13708<T> = T extends (infer U)[]
  ? DeepReadonlyArray13708<U>
  : T extends object
  ? DeepReadonlyObject13708<T>
  : T;

interface DeepReadonlyArray13708<T> extends ReadonlyArray<DeepReadonly13708<T>> {}

type DeepReadonlyObject13708<T> = {
  readonly [P in keyof T]: DeepReadonly13708<T[P]>;
};

type UnionToIntersection13708<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13708<T> = UnionToIntersection13708<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13708<T extends unknown[], V> = [...T, V];

type TuplifyUnion13708<T, L = LastOf13708<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13708<TuplifyUnion13708<Exclude<T, L>>, L>;

type DeepPartial13708<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13708<T[P]> }
  : T;

type Paths13708<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13708<K, Paths13708<T[K], Prev13708[D]>> : never }[keyof T]
  : never;

type Prev13708 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13708<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13708 {
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

type ConfigPaths13708 = Paths13708<NestedConfig13708>;

interface HeavyProps13708 {
  config: DeepPartial13708<NestedConfig13708>;
  path?: ConfigPaths13708;
}

const HeavyComponent13708 = memo(function HeavyComponent13708({ config }: HeavyProps13708) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13708) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13708 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13708: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13708.displayName = 'HeavyComponent13708';
export default HeavyComponent13708;
