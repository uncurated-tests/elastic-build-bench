'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14215<T> = T extends (infer U)[]
  ? DeepReadonlyArray14215<U>
  : T extends object
  ? DeepReadonlyObject14215<T>
  : T;

interface DeepReadonlyArray14215<T> extends ReadonlyArray<DeepReadonly14215<T>> {}

type DeepReadonlyObject14215<T> = {
  readonly [P in keyof T]: DeepReadonly14215<T[P]>;
};

type UnionToIntersection14215<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14215<T> = UnionToIntersection14215<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14215<T extends unknown[], V> = [...T, V];

type TuplifyUnion14215<T, L = LastOf14215<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14215<TuplifyUnion14215<Exclude<T, L>>, L>;

type DeepPartial14215<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14215<T[P]> }
  : T;

type Paths14215<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14215<K, Paths14215<T[K], Prev14215[D]>> : never }[keyof T]
  : never;

type Prev14215 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14215<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14215 {
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

type ConfigPaths14215 = Paths14215<NestedConfig14215>;

interface HeavyProps14215 {
  config: DeepPartial14215<NestedConfig14215>;
  path?: ConfigPaths14215;
}

const HeavyComponent14215 = memo(function HeavyComponent14215({ config }: HeavyProps14215) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14215) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14215 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14215: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14215.displayName = 'HeavyComponent14215';
export default HeavyComponent14215;
