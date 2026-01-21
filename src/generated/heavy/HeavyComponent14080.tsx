'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14080<T> = T extends (infer U)[]
  ? DeepReadonlyArray14080<U>
  : T extends object
  ? DeepReadonlyObject14080<T>
  : T;

interface DeepReadonlyArray14080<T> extends ReadonlyArray<DeepReadonly14080<T>> {}

type DeepReadonlyObject14080<T> = {
  readonly [P in keyof T]: DeepReadonly14080<T[P]>;
};

type UnionToIntersection14080<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14080<T> = UnionToIntersection14080<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14080<T extends unknown[], V> = [...T, V];

type TuplifyUnion14080<T, L = LastOf14080<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14080<TuplifyUnion14080<Exclude<T, L>>, L>;

type DeepPartial14080<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14080<T[P]> }
  : T;

type Paths14080<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14080<K, Paths14080<T[K], Prev14080[D]>> : never }[keyof T]
  : never;

type Prev14080 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14080<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14080 {
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

type ConfigPaths14080 = Paths14080<NestedConfig14080>;

interface HeavyProps14080 {
  config: DeepPartial14080<NestedConfig14080>;
  path?: ConfigPaths14080;
}

const HeavyComponent14080 = memo(function HeavyComponent14080({ config }: HeavyProps14080) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14080) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14080 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14080: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14080.displayName = 'HeavyComponent14080';
export default HeavyComponent14080;
