'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly13524<T> = T extends (infer U)[]
  ? DeepReadonlyArray13524<U>
  : T extends object
  ? DeepReadonlyObject13524<T>
  : T;

interface DeepReadonlyArray13524<T> extends ReadonlyArray<DeepReadonly13524<T>> {}

type DeepReadonlyObject13524<T> = {
  readonly [P in keyof T]: DeepReadonly13524<T[P]>;
};

type UnionToIntersection13524<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf13524<T> = UnionToIntersection13524<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push13524<T extends unknown[], V> = [...T, V];

type TuplifyUnion13524<T, L = LastOf13524<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push13524<TuplifyUnion13524<Exclude<T, L>>, L>;

type DeepPartial13524<T> = T extends object
  ? { [P in keyof T]?: DeepPartial13524<T[P]> }
  : T;

type Paths13524<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join13524<K, Paths13524<T[K], Prev13524[D]>> : never }[keyof T]
  : never;

type Prev13524 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join13524<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig13524 {
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

type ConfigPaths13524 = Paths13524<NestedConfig13524>;

interface HeavyProps13524 {
  config: DeepPartial13524<NestedConfig13524>;
  path?: ConfigPaths13524;
}

const HeavyComponent13524 = memo(function HeavyComponent13524({ config }: HeavyProps13524) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 13524) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-13524 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H13524: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent13524.displayName = 'HeavyComponent13524';
export default HeavyComponent13524;
