'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly880<T> = T extends (infer U)[]
  ? DeepReadonlyArray880<U>
  : T extends object
  ? DeepReadonlyObject880<T>
  : T;

interface DeepReadonlyArray880<T> extends ReadonlyArray<DeepReadonly880<T>> {}

type DeepReadonlyObject880<T> = {
  readonly [P in keyof T]: DeepReadonly880<T[P]>;
};

type UnionToIntersection880<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf880<T> = UnionToIntersection880<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push880<T extends unknown[], V> = [...T, V];

type TuplifyUnion880<T, L = LastOf880<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push880<TuplifyUnion880<Exclude<T, L>>, L>;

type DeepPartial880<T> = T extends object
  ? { [P in keyof T]?: DeepPartial880<T[P]> }
  : T;

type Paths880<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join880<K, Paths880<T[K], Prev880[D]>> : never }[keyof T]
  : never;

type Prev880 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join880<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig880 {
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

type ConfigPaths880 = Paths880<NestedConfig880>;

interface HeavyProps880 {
  config: DeepPartial880<NestedConfig880>;
  path?: ConfigPaths880;
}

const HeavyComponent880 = memo(function HeavyComponent880({ config }: HeavyProps880) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 880) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-880 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H880: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent880.displayName = 'HeavyComponent880';
export default HeavyComponent880;
