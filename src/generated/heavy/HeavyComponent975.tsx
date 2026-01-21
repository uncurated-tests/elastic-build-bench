'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly975<T> = T extends (infer U)[]
  ? DeepReadonlyArray975<U>
  : T extends object
  ? DeepReadonlyObject975<T>
  : T;

interface DeepReadonlyArray975<T> extends ReadonlyArray<DeepReadonly975<T>> {}

type DeepReadonlyObject975<T> = {
  readonly [P in keyof T]: DeepReadonly975<T[P]>;
};

type UnionToIntersection975<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf975<T> = UnionToIntersection975<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push975<T extends unknown[], V> = [...T, V];

type TuplifyUnion975<T, L = LastOf975<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push975<TuplifyUnion975<Exclude<T, L>>, L>;

type DeepPartial975<T> = T extends object
  ? { [P in keyof T]?: DeepPartial975<T[P]> }
  : T;

type Paths975<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join975<K, Paths975<T[K], Prev975[D]>> : never }[keyof T]
  : never;

type Prev975 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join975<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig975 {
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

type ConfigPaths975 = Paths975<NestedConfig975>;

interface HeavyProps975 {
  config: DeepPartial975<NestedConfig975>;
  path?: ConfigPaths975;
}

const HeavyComponent975 = memo(function HeavyComponent975({ config }: HeavyProps975) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 975) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-975 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H975: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent975.displayName = 'HeavyComponent975';
export default HeavyComponent975;
