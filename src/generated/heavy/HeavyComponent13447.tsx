'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13447<T> = T extends (infer U)[]
  ? DeepReadonlyArray13447<U>
  : T extends object
  ? DeepReadonlyObject13447<T>
  : T;

interface DeepReadonlyArray13447<T> extends ReadonlyArray<DeepReadonly13447<T>> {}

type DeepReadonlyObject13447<T> = {
  readonly [P in keyof T]: DeepReadonly13447<T[P]>;
};

type UnionToIntersection13447<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13447<T> = UnionToIntersection13447<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13447<T extends unknown[], V> = [...T, V];

type TuplifyUnion13447<T, L = LastOf13447<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13447<TuplifyUnion13447<Exclude<T, L>>, L>;

type DeepPartial13447<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13447<T[P]> }
  : T;

type Paths13447<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13447<K, Paths13447<T[K], Prev13447[D]>> : never }[keyof T]
  : never;

type Prev13447 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13447<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13447 {
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

type ConfigPaths13447 = Paths13447<NestedConfig13447>;

interface HeavyProps13447 {
  config: DeepPartial13447<NestedConfig13447>;
  path?: ConfigPaths13447;
}

const HeavyComponent13447 = memo(function HeavyComponent13447({ config }: HeavyProps13447) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13447) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13447 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13447: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13447.displayName = 'HeavyComponent13447';
export default HeavyComponent13447;
