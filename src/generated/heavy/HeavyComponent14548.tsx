'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14548<T> = T extends (infer U)[]
  ? DeepReadonlyArray14548<U>
  : T extends object
  ? DeepReadonlyObject14548<T>
  : T;

interface DeepReadonlyArray14548<T> extends ReadonlyArray<DeepReadonly14548<T>> {}

type DeepReadonlyObject14548<T> = {
  readonly [P in keyof T]: DeepReadonly14548<T[P]>;
};

type UnionToIntersection14548<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14548<T> = UnionToIntersection14548<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14548<T extends unknown[], V> = [...T, V];

type TuplifyUnion14548<T, L = LastOf14548<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14548<TuplifyUnion14548<Exclude<T, L>>, L>;

type DeepPartial14548<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14548<T[P]> }
  : T;

type Paths14548<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14548<K, Paths14548<T[K], Prev14548[D]>> : never }[keyof T]
  : never;

type Prev14548 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14548<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14548 {
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

type ConfigPaths14548 = Paths14548<NestedConfig14548>;

interface HeavyProps14548 {
  config: DeepPartial14548<NestedConfig14548>;
  path?: ConfigPaths14548;
}

const HeavyComponent14548 = memo(function HeavyComponent14548({ config }: HeavyProps14548) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14548) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14548 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14548: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14548.displayName = 'HeavyComponent14548';
export default HeavyComponent14548;
