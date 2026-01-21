'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14440<T> = T extends (infer U)[]
  ? DeepReadonlyArray14440<U>
  : T extends object
  ? DeepReadonlyObject14440<T>
  : T;

interface DeepReadonlyArray14440<T> extends ReadonlyArray<DeepReadonly14440<T>> {}

type DeepReadonlyObject14440<T> = {
  readonly [P in keyof T]: DeepReadonly14440<T[P]>;
};

type UnionToIntersection14440<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14440<T> = UnionToIntersection14440<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14440<T extends unknown[], V> = [...T, V];

type TuplifyUnion14440<T, L = LastOf14440<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14440<TuplifyUnion14440<Exclude<T, L>>, L>;

type DeepPartial14440<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14440<T[P]> }
  : T;

type Paths14440<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14440<K, Paths14440<T[K], Prev14440[D]>> : never }[keyof T]
  : never;

type Prev14440 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14440<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14440 {
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

type ConfigPaths14440 = Paths14440<NestedConfig14440>;

interface HeavyProps14440 {
  config: DeepPartial14440<NestedConfig14440>;
  path?: ConfigPaths14440;
}

const HeavyComponent14440 = memo(function HeavyComponent14440({ config }: HeavyProps14440) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14440) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14440 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14440: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14440.displayName = 'HeavyComponent14440';
export default HeavyComponent14440;
