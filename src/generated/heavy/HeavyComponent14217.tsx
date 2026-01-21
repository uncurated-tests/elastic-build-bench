'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14217<T> = T extends (infer U)[]
  ? DeepReadonlyArray14217<U>
  : T extends object
  ? DeepReadonlyObject14217<T>
  : T;

interface DeepReadonlyArray14217<T> extends ReadonlyArray<DeepReadonly14217<T>> {}

type DeepReadonlyObject14217<T> = {
  readonly [P in keyof T]: DeepReadonly14217<T[P]>;
};

type UnionToIntersection14217<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14217<T> = UnionToIntersection14217<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14217<T extends unknown[], V> = [...T, V];

type TuplifyUnion14217<T, L = LastOf14217<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14217<TuplifyUnion14217<Exclude<T, L>>, L>;

type DeepPartial14217<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14217<T[P]> }
  : T;

type Paths14217<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14217<K, Paths14217<T[K], Prev14217[D]>> : never }[keyof T]
  : never;

type Prev14217 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14217<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14217 {
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

type ConfigPaths14217 = Paths14217<NestedConfig14217>;

interface HeavyProps14217 {
  config: DeepPartial14217<NestedConfig14217>;
  path?: ConfigPaths14217;
}

const HeavyComponent14217 = memo(function HeavyComponent14217({ config }: HeavyProps14217) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14217) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14217 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14217: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14217.displayName = 'HeavyComponent14217';
export default HeavyComponent14217;
