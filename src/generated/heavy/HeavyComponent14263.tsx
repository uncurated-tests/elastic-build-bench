'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14263<T> = T extends (infer U)[]
  ? DeepReadonlyArray14263<U>
  : T extends object
  ? DeepReadonlyObject14263<T>
  : T;

interface DeepReadonlyArray14263<T> extends ReadonlyArray<DeepReadonly14263<T>> {}

type DeepReadonlyObject14263<T> = {
  readonly [P in keyof T]: DeepReadonly14263<T[P]>;
};

type UnionToIntersection14263<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14263<T> = UnionToIntersection14263<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14263<T extends unknown[], V> = [...T, V];

type TuplifyUnion14263<T, L = LastOf14263<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14263<TuplifyUnion14263<Exclude<T, L>>, L>;

type DeepPartial14263<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14263<T[P]> }
  : T;

type Paths14263<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14263<K, Paths14263<T[K], Prev14263[D]>> : never }[keyof T]
  : never;

type Prev14263 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14263<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14263 {
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

type ConfigPaths14263 = Paths14263<NestedConfig14263>;

interface HeavyProps14263 {
  config: DeepPartial14263<NestedConfig14263>;
  path?: ConfigPaths14263;
}

const HeavyComponent14263 = memo(function HeavyComponent14263({ config }: HeavyProps14263) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14263) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14263 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14263: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14263.displayName = 'HeavyComponent14263';
export default HeavyComponent14263;
