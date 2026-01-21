'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14842<T> = T extends (infer U)[]
  ? DeepReadonlyArray14842<U>
  : T extends object
  ? DeepReadonlyObject14842<T>
  : T;

interface DeepReadonlyArray14842<T> extends ReadonlyArray<DeepReadonly14842<T>> {}

type DeepReadonlyObject14842<T> = {
  readonly [P in keyof T]: DeepReadonly14842<T[P]>;
};

type UnionToIntersection14842<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14842<T> = UnionToIntersection14842<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14842<T extends unknown[], V> = [...T, V];

type TuplifyUnion14842<T, L = LastOf14842<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14842<TuplifyUnion14842<Exclude<T, L>>, L>;

type DeepPartial14842<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14842<T[P]> }
  : T;

type Paths14842<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14842<K, Paths14842<T[K], Prev14842[D]>> : never }[keyof T]
  : never;

type Prev14842 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14842<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14842 {
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

type ConfigPaths14842 = Paths14842<NestedConfig14842>;

interface HeavyProps14842 {
  config: DeepPartial14842<NestedConfig14842>;
  path?: ConfigPaths14842;
}

const HeavyComponent14842 = memo(function HeavyComponent14842({ config }: HeavyProps14842) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14842) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14842 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14842: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14842.displayName = 'HeavyComponent14842';
export default HeavyComponent14842;
