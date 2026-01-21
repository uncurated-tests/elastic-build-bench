'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13011<T> = T extends (infer U)[]
  ? DeepReadonlyArray13011<U>
  : T extends object
  ? DeepReadonlyObject13011<T>
  : T;

interface DeepReadonlyArray13011<T> extends ReadonlyArray<DeepReadonly13011<T>> {}

type DeepReadonlyObject13011<T> = {
  readonly [P in keyof T]: DeepReadonly13011<T[P]>;
};

type UnionToIntersection13011<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13011<T> = UnionToIntersection13011<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13011<T extends unknown[], V> = [...T, V];

type TuplifyUnion13011<T, L = LastOf13011<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13011<TuplifyUnion13011<Exclude<T, L>>, L>;

type DeepPartial13011<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13011<T[P]> }
  : T;

type Paths13011<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13011<K, Paths13011<T[K], Prev13011[D]>> : never }[keyof T]
  : never;

type Prev13011 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13011<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13011 {
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

type ConfigPaths13011 = Paths13011<NestedConfig13011>;

interface HeavyProps13011 {
  config: DeepPartial13011<NestedConfig13011>;
  path?: ConfigPaths13011;
}

const HeavyComponent13011 = memo(function HeavyComponent13011({ config }: HeavyProps13011) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13011) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13011 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13011: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13011.displayName = 'HeavyComponent13011';
export default HeavyComponent13011;
