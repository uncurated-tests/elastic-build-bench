'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13288<T> = T extends (infer U)[]
  ? DeepReadonlyArray13288<U>
  : T extends object
  ? DeepReadonlyObject13288<T>
  : T;

interface DeepReadonlyArray13288<T> extends ReadonlyArray<DeepReadonly13288<T>> {}

type DeepReadonlyObject13288<T> = {
  readonly [P in keyof T]: DeepReadonly13288<T[P]>;
};

type UnionToIntersection13288<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13288<T> = UnionToIntersection13288<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13288<T extends unknown[], V> = [...T, V];

type TuplifyUnion13288<T, L = LastOf13288<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13288<TuplifyUnion13288<Exclude<T, L>>, L>;

type DeepPartial13288<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13288<T[P]> }
  : T;

type Paths13288<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13288<K, Paths13288<T[K], Prev13288[D]>> : never }[keyof T]
  : never;

type Prev13288 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13288<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13288 {
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

type ConfigPaths13288 = Paths13288<NestedConfig13288>;

interface HeavyProps13288 {
  config: DeepPartial13288<NestedConfig13288>;
  path?: ConfigPaths13288;
}

const HeavyComponent13288 = memo(function HeavyComponent13288({ config }: HeavyProps13288) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13288) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13288 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13288: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13288.displayName = 'HeavyComponent13288';
export default HeavyComponent13288;
