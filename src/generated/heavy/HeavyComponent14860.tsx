'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14860<T> = T extends (infer U)[]
  ? DeepReadonlyArray14860<U>
  : T extends object
  ? DeepReadonlyObject14860<T>
  : T;

interface DeepReadonlyArray14860<T> extends ReadonlyArray<DeepReadonly14860<T>> {}

type DeepReadonlyObject14860<T> = {
  readonly [P in keyof T]: DeepReadonly14860<T[P]>;
};

type UnionToIntersection14860<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14860<T> = UnionToIntersection14860<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14860<T extends unknown[], V> = [...T, V];

type TuplifyUnion14860<T, L = LastOf14860<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14860<TuplifyUnion14860<Exclude<T, L>>, L>;

type DeepPartial14860<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14860<T[P]> }
  : T;

type Paths14860<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14860<K, Paths14860<T[K], Prev14860[D]>> : never }[keyof T]
  : never;

type Prev14860 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14860<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14860 {
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

type ConfigPaths14860 = Paths14860<NestedConfig14860>;

interface HeavyProps14860 {
  config: DeepPartial14860<NestedConfig14860>;
  path?: ConfigPaths14860;
}

const HeavyComponent14860 = memo(function HeavyComponent14860({ config }: HeavyProps14860) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14860) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14860 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14860: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14860.displayName = 'HeavyComponent14860';
export default HeavyComponent14860;
