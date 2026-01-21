'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14252<T> = T extends (infer U)[]
  ? DeepReadonlyArray14252<U>
  : T extends object
  ? DeepReadonlyObject14252<T>
  : T;

interface DeepReadonlyArray14252<T> extends ReadonlyArray<DeepReadonly14252<T>> {}

type DeepReadonlyObject14252<T> = {
  readonly [P in keyof T]: DeepReadonly14252<T[P]>;
};

type UnionToIntersection14252<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14252<T> = UnionToIntersection14252<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14252<T extends unknown[], V> = [...T, V];

type TuplifyUnion14252<T, L = LastOf14252<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14252<TuplifyUnion14252<Exclude<T, L>>, L>;

type DeepPartial14252<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14252<T[P]> }
  : T;

type Paths14252<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14252<K, Paths14252<T[K], Prev14252[D]>> : never }[keyof T]
  : never;

type Prev14252 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14252<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14252 {
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

type ConfigPaths14252 = Paths14252<NestedConfig14252>;

interface HeavyProps14252 {
  config: DeepPartial14252<NestedConfig14252>;
  path?: ConfigPaths14252;
}

const HeavyComponent14252 = memo(function HeavyComponent14252({ config }: HeavyProps14252) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14252) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14252 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14252: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14252.displayName = 'HeavyComponent14252';
export default HeavyComponent14252;
