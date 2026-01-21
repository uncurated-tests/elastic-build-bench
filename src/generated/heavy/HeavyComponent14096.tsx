'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14096<T> = T extends (infer U)[]
  ? DeepReadonlyArray14096<U>
  : T extends object
  ? DeepReadonlyObject14096<T>
  : T;

interface DeepReadonlyArray14096<T> extends ReadonlyArray<DeepReadonly14096<T>> {}

type DeepReadonlyObject14096<T> = {
  readonly [P in keyof T]: DeepReadonly14096<T[P]>;
};

type UnionToIntersection14096<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14096<T> = UnionToIntersection14096<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14096<T extends unknown[], V> = [...T, V];

type TuplifyUnion14096<T, L = LastOf14096<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14096<TuplifyUnion14096<Exclude<T, L>>, L>;

type DeepPartial14096<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14096<T[P]> }
  : T;

type Paths14096<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14096<K, Paths14096<T[K], Prev14096[D]>> : never }[keyof T]
  : never;

type Prev14096 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14096<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14096 {
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

type ConfigPaths14096 = Paths14096<NestedConfig14096>;

interface HeavyProps14096 {
  config: DeepPartial14096<NestedConfig14096>;
  path?: ConfigPaths14096;
}

const HeavyComponent14096 = memo(function HeavyComponent14096({ config }: HeavyProps14096) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14096) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14096 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14096: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14096.displayName = 'HeavyComponent14096';
export default HeavyComponent14096;
