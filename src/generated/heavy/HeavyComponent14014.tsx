'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14014<T> = T extends (infer U)[]
  ? DeepReadonlyArray14014<U>
  : T extends object
  ? DeepReadonlyObject14014<T>
  : T;

interface DeepReadonlyArray14014<T> extends ReadonlyArray<DeepReadonly14014<T>> {}

type DeepReadonlyObject14014<T> = {
  readonly [P in keyof T]: DeepReadonly14014<T[P]>;
};

type UnionToIntersection14014<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14014<T> = UnionToIntersection14014<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14014<T extends unknown[], V> = [...T, V];

type TuplifyUnion14014<T, L = LastOf14014<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14014<TuplifyUnion14014<Exclude<T, L>>, L>;

type DeepPartial14014<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14014<T[P]> }
  : T;

type Paths14014<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14014<K, Paths14014<T[K], Prev14014[D]>> : never }[keyof T]
  : never;

type Prev14014 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14014<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14014 {
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

type ConfigPaths14014 = Paths14014<NestedConfig14014>;

interface HeavyProps14014 {
  config: DeepPartial14014<NestedConfig14014>;
  path?: ConfigPaths14014;
}

const HeavyComponent14014 = memo(function HeavyComponent14014({ config }: HeavyProps14014) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14014) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14014 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14014: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14014.displayName = 'HeavyComponent14014';
export default HeavyComponent14014;
