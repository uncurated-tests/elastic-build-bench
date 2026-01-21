'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly12791<T> = T extends (infer U)[]
  ? DeepReadonlyArray12791<U>
  : T extends object
  ? DeepReadonlyObject12791<T>
  : T;

interface DeepReadonlyArray12791<T> extends ReadonlyArray<DeepReadonly12791<T>> {}

type DeepReadonlyObject12791<T> = {
  readonly [P in keyof T]: DeepReadonly12791<T[P]>;
};

type UnionToIntersection12791<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf12791<T> = UnionToIntersection12791<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push12791<T extends unknown[], V> = [...T, V];

type TuplifyUnion12791<T, L = LastOf12791<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push12791<TuplifyUnion12791<Exclude<T, L>>, L>;

type DeepPartial12791<T> = T extends object
  ? { [P in keyof T]?: DeepPartial12791<T[P]> }
  : T;

type Paths12791<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join12791<K, Paths12791<T[K], Prev12791[D]>> : never }[keyof T]
  : never;

type Prev12791 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join12791<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig12791 {
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

type ConfigPaths12791 = Paths12791<NestedConfig12791>;

interface HeavyProps12791 {
  config: DeepPartial12791<NestedConfig12791>;
  path?: ConfigPaths12791;
}

const HeavyComponent12791 = memo(function HeavyComponent12791({ config }: HeavyProps12791) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 12791) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-12791 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H12791: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent12791.displayName = 'HeavyComponent12791';
export default HeavyComponent12791;
