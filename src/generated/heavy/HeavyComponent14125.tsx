'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14125<T> = T extends (infer U)[]
  ? DeepReadonlyArray14125<U>
  : T extends object
  ? DeepReadonlyObject14125<T>
  : T;

interface DeepReadonlyArray14125<T> extends ReadonlyArray<DeepReadonly14125<T>> {}

type DeepReadonlyObject14125<T> = {
  readonly [P in keyof T]: DeepReadonly14125<T[P]>;
};

type UnionToIntersection14125<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14125<T> = UnionToIntersection14125<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14125<T extends unknown[], V> = [...T, V];

type TuplifyUnion14125<T, L = LastOf14125<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14125<TuplifyUnion14125<Exclude<T, L>>, L>;

type DeepPartial14125<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14125<T[P]> }
  : T;

type Paths14125<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14125<K, Paths14125<T[K], Prev14125[D]>> : never }[keyof T]
  : never;

type Prev14125 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14125<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14125 {
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

type ConfigPaths14125 = Paths14125<NestedConfig14125>;

interface HeavyProps14125 {
  config: DeepPartial14125<NestedConfig14125>;
  path?: ConfigPaths14125;
}

const HeavyComponent14125 = memo(function HeavyComponent14125({ config }: HeavyProps14125) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14125) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14125 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14125: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14125.displayName = 'HeavyComponent14125';
export default HeavyComponent14125;
