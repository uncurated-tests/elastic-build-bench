'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly158<T> = T extends (infer U)[]
  ? DeepReadonlyArray158<U>
  : T extends object
  ? DeepReadonlyObject158<T>
  : T;

interface DeepReadonlyArray158<T> extends ReadonlyArray<DeepReadonly158<T>> {}

type DeepReadonlyObject158<T> = {
  readonly [P in keyof T]: DeepReadonly158<T[P]>;
};

type UnionToIntersection158<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf158<T> = UnionToIntersection158<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push158<T extends unknown[], V> = [...T, V];

type TuplifyUnion158<T, L = LastOf158<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push158<TuplifyUnion158<Exclude<T, L>>, L>;

type DeepPartial158<T> = T extends object
  ? { [P in keyof T]?: DeepPartial158<T[P]> }
  : T;

type Paths158<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join158<K, Paths158<T[K], Prev158[D]>> : never }[keyof T]
  : never;

type Prev158 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join158<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig158 {
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

type ConfigPaths158 = Paths158<NestedConfig158>;

interface HeavyProps158 {
  config: DeepPartial158<NestedConfig158>;
  path?: ConfigPaths158;
}

const HeavyComponent158 = memo(function HeavyComponent158({ config }: HeavyProps158) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 158) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-158 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H158: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent158.displayName = 'HeavyComponent158';
export default HeavyComponent158;
