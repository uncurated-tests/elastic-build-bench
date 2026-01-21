'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14327<T> = T extends (infer U)[]
  ? DeepReadonlyArray14327<U>
  : T extends object
  ? DeepReadonlyObject14327<T>
  : T;

interface DeepReadonlyArray14327<T> extends ReadonlyArray<DeepReadonly14327<T>> {}

type DeepReadonlyObject14327<T> = {
  readonly [P in keyof T]: DeepReadonly14327<T[P]>;
};

type UnionToIntersection14327<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14327<T> = UnionToIntersection14327<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14327<T extends unknown[], V> = [...T, V];

type TuplifyUnion14327<T, L = LastOf14327<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14327<TuplifyUnion14327<Exclude<T, L>>, L>;

type DeepPartial14327<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14327<T[P]> }
  : T;

type Paths14327<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14327<K, Paths14327<T[K], Prev14327[D]>> : never }[keyof T]
  : never;

type Prev14327 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14327<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14327 {
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

type ConfigPaths14327 = Paths14327<NestedConfig14327>;

interface HeavyProps14327 {
  config: DeepPartial14327<NestedConfig14327>;
  path?: ConfigPaths14327;
}

const HeavyComponent14327 = memo(function HeavyComponent14327({ config }: HeavyProps14327) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14327) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14327 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14327: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14327.displayName = 'HeavyComponent14327';
export default HeavyComponent14327;
