'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly858<T> = T extends (infer U)[]
  ? DeepReadonlyArray858<U>
  : T extends object
  ? DeepReadonlyObject858<T>
  : T;

interface DeepReadonlyArray858<T> extends ReadonlyArray<DeepReadonly858<T>> {}

type DeepReadonlyObject858<T> = {
  readonly [P in keyof T]: DeepReadonly858<T[P]>;
};

type UnionToIntersection858<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf858<T> = UnionToIntersection858<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push858<T extends unknown[], V> = [...T, V];

type TuplifyUnion858<T, L = LastOf858<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push858<TuplifyUnion858<Exclude<T, L>>, L>;

type DeepPartial858<T> = T extends object
  ? { [P in keyof T]?: DeepPartial858<T[P]> }
  : T;

type Paths858<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join858<K, Paths858<T[K], Prev858[D]>> : never }[keyof T]
  : never;

type Prev858 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join858<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig858 {
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

type ConfigPaths858 = Paths858<NestedConfig858>;

interface HeavyProps858 {
  config: DeepPartial858<NestedConfig858>;
  path?: ConfigPaths858;
}

const HeavyComponent858 = memo(function HeavyComponent858({ config }: HeavyProps858) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 858) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-858 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H858: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent858.displayName = 'HeavyComponent858';
export default HeavyComponent858;
