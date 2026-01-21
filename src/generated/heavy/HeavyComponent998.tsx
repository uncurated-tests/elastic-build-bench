'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly998<T> = T extends (infer U)[]
  ? DeepReadonlyArray998<U>
  : T extends object
  ? DeepReadonlyObject998<T>
  : T;

interface DeepReadonlyArray998<T> extends ReadonlyArray<DeepReadonly998<T>> {}

type DeepReadonlyObject998<T> = {
  readonly [P in keyof T]: DeepReadonly998<T[P]>;
};

type UnionToIntersection998<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf998<T> = UnionToIntersection998<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push998<T extends unknown[], V> = [...T, V];

type TuplifyUnion998<T, L = LastOf998<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push998<TuplifyUnion998<Exclude<T, L>>, L>;

type DeepPartial998<T> = T extends object
  ? { [P in keyof T]?: DeepPartial998<T[P]> }
  : T;

type Paths998<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join998<K, Paths998<T[K], Prev998[D]>> : never }[keyof T]
  : never;

type Prev998 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join998<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig998 {
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

type ConfigPaths998 = Paths998<NestedConfig998>;

interface HeavyProps998 {
  config: DeepPartial998<NestedConfig998>;
  path?: ConfigPaths998;
}

const HeavyComponent998 = memo(function HeavyComponent998({ config }: HeavyProps998) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 998) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-998 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H998: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent998.displayName = 'HeavyComponent998';
export default HeavyComponent998;
