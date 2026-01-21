'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14233<T> = T extends (infer U)[]
  ? DeepReadonlyArray14233<U>
  : T extends object
  ? DeepReadonlyObject14233<T>
  : T;

interface DeepReadonlyArray14233<T> extends ReadonlyArray<DeepReadonly14233<T>> {}

type DeepReadonlyObject14233<T> = {
  readonly [P in keyof T]: DeepReadonly14233<T[P]>;
};

type UnionToIntersection14233<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14233<T> = UnionToIntersection14233<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14233<T extends unknown[], V> = [...T, V];

type TuplifyUnion14233<T, L = LastOf14233<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14233<TuplifyUnion14233<Exclude<T, L>>, L>;

type DeepPartial14233<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14233<T[P]> }
  : T;

type Paths14233<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14233<K, Paths14233<T[K], Prev14233[D]>> : never }[keyof T]
  : never;

type Prev14233 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14233<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14233 {
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

type ConfigPaths14233 = Paths14233<NestedConfig14233>;

interface HeavyProps14233 {
  config: DeepPartial14233<NestedConfig14233>;
  path?: ConfigPaths14233;
}

const HeavyComponent14233 = memo(function HeavyComponent14233({ config }: HeavyProps14233) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14233) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14233 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14233: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14233.displayName = 'HeavyComponent14233';
export default HeavyComponent14233;
