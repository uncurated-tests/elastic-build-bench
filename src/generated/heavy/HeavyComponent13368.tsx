'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13368<T> = T extends (infer U)[]
  ? DeepReadonlyArray13368<U>
  : T extends object
  ? DeepReadonlyObject13368<T>
  : T;

interface DeepReadonlyArray13368<T> extends ReadonlyArray<DeepReadonly13368<T>> {}

type DeepReadonlyObject13368<T> = {
  readonly [P in keyof T]: DeepReadonly13368<T[P]>;
};

type UnionToIntersection13368<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13368<T> = UnionToIntersection13368<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13368<T extends unknown[], V> = [...T, V];

type TuplifyUnion13368<T, L = LastOf13368<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13368<TuplifyUnion13368<Exclude<T, L>>, L>;

type DeepPartial13368<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13368<T[P]> }
  : T;

type Paths13368<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13368<K, Paths13368<T[K], Prev13368[D]>> : never }[keyof T]
  : never;

type Prev13368 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13368<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13368 {
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

type ConfigPaths13368 = Paths13368<NestedConfig13368>;

interface HeavyProps13368 {
  config: DeepPartial13368<NestedConfig13368>;
  path?: ConfigPaths13368;
}

const HeavyComponent13368 = memo(function HeavyComponent13368({ config }: HeavyProps13368) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13368) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13368 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13368: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13368.displayName = 'HeavyComponent13368';
export default HeavyComponent13368;
