'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14431<T> = T extends (infer U)[]
  ? DeepReadonlyArray14431<U>
  : T extends object
  ? DeepReadonlyObject14431<T>
  : T;

interface DeepReadonlyArray14431<T> extends ReadonlyArray<DeepReadonly14431<T>> {}

type DeepReadonlyObject14431<T> = {
  readonly [P in keyof T]: DeepReadonly14431<T[P]>;
};

type UnionToIntersection14431<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14431<T> = UnionToIntersection14431<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14431<T extends unknown[], V> = [...T, V];

type TuplifyUnion14431<T, L = LastOf14431<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14431<TuplifyUnion14431<Exclude<T, L>>, L>;

type DeepPartial14431<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14431<T[P]> }
  : T;

type Paths14431<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14431<K, Paths14431<T[K], Prev14431[D]>> : never }[keyof T]
  : never;

type Prev14431 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14431<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14431 {
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

type ConfigPaths14431 = Paths14431<NestedConfig14431>;

interface HeavyProps14431 {
  config: DeepPartial14431<NestedConfig14431>;
  path?: ConfigPaths14431;
}

const HeavyComponent14431 = memo(function HeavyComponent14431({ config }: HeavyProps14431) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14431) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14431 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14431: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14431.displayName = 'HeavyComponent14431';
export default HeavyComponent14431;
