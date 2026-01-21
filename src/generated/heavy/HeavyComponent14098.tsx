'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14098<T> = T extends (infer U)[]
  ? DeepReadonlyArray14098<U>
  : T extends object
  ? DeepReadonlyObject14098<T>
  : T;

interface DeepReadonlyArray14098<T> extends ReadonlyArray<DeepReadonly14098<T>> {}

type DeepReadonlyObject14098<T> = {
  readonly [P in keyof T]: DeepReadonly14098<T[P]>;
};

type UnionToIntersection14098<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14098<T> = UnionToIntersection14098<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14098<T extends unknown[], V> = [...T, V];

type TuplifyUnion14098<T, L = LastOf14098<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14098<TuplifyUnion14098<Exclude<T, L>>, L>;

type DeepPartial14098<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14098<T[P]> }
  : T;

type Paths14098<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14098<K, Paths14098<T[K], Prev14098[D]>> : never }[keyof T]
  : never;

type Prev14098 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14098<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14098 {
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

type ConfigPaths14098 = Paths14098<NestedConfig14098>;

interface HeavyProps14098 {
  config: DeepPartial14098<NestedConfig14098>;
  path?: ConfigPaths14098;
}

const HeavyComponent14098 = memo(function HeavyComponent14098({ config }: HeavyProps14098) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14098) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14098 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14098: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14098.displayName = 'HeavyComponent14098';
export default HeavyComponent14098;
