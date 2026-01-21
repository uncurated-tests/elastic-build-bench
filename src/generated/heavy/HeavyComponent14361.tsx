'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14361<T> = T extends (infer U)[]
  ? DeepReadonlyArray14361<U>
  : T extends object
  ? DeepReadonlyObject14361<T>
  : T;

interface DeepReadonlyArray14361<T> extends ReadonlyArray<DeepReadonly14361<T>> {}

type DeepReadonlyObject14361<T> = {
  readonly [P in keyof T]: DeepReadonly14361<T[P]>;
};

type UnionToIntersection14361<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14361<T> = UnionToIntersection14361<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14361<T extends unknown[], V> = [...T, V];

type TuplifyUnion14361<T, L = LastOf14361<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14361<TuplifyUnion14361<Exclude<T, L>>, L>;

type DeepPartial14361<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14361<T[P]> }
  : T;

type Paths14361<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14361<K, Paths14361<T[K], Prev14361[D]>> : never }[keyof T]
  : never;

type Prev14361 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14361<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14361 {
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

type ConfigPaths14361 = Paths14361<NestedConfig14361>;

interface HeavyProps14361 {
  config: DeepPartial14361<NestedConfig14361>;
  path?: ConfigPaths14361;
}

const HeavyComponent14361 = memo(function HeavyComponent14361({ config }: HeavyProps14361) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14361) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14361 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14361: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14361.displayName = 'HeavyComponent14361';
export default HeavyComponent14361;
