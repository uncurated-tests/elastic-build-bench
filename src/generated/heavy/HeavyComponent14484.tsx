'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14484<T> = T extends (infer U)[]
  ? DeepReadonlyArray14484<U>
  : T extends object
  ? DeepReadonlyObject14484<T>
  : T;

interface DeepReadonlyArray14484<T> extends ReadonlyArray<DeepReadonly14484<T>> {}

type DeepReadonlyObject14484<T> = {
  readonly [P in keyof T]: DeepReadonly14484<T[P]>;
};

type UnionToIntersection14484<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14484<T> = UnionToIntersection14484<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14484<T extends unknown[], V> = [...T, V];

type TuplifyUnion14484<T, L = LastOf14484<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14484<TuplifyUnion14484<Exclude<T, L>>, L>;

type DeepPartial14484<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14484<T[P]> }
  : T;

type Paths14484<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14484<K, Paths14484<T[K], Prev14484[D]>> : never }[keyof T]
  : never;

type Prev14484 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14484<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14484 {
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

type ConfigPaths14484 = Paths14484<NestedConfig14484>;

interface HeavyProps14484 {
  config: DeepPartial14484<NestedConfig14484>;
  path?: ConfigPaths14484;
}

const HeavyComponent14484 = memo(function HeavyComponent14484({ config }: HeavyProps14484) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14484) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14484 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14484: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14484.displayName = 'HeavyComponent14484';
export default HeavyComponent14484;
