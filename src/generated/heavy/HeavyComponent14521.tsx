'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14521<T> = T extends (infer U)[]
  ? DeepReadonlyArray14521<U>
  : T extends object
  ? DeepReadonlyObject14521<T>
  : T;

interface DeepReadonlyArray14521<T> extends ReadonlyArray<DeepReadonly14521<T>> {}

type DeepReadonlyObject14521<T> = {
  readonly [P in keyof T]: DeepReadonly14521<T[P]>;
};

type UnionToIntersection14521<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14521<T> = UnionToIntersection14521<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14521<T extends unknown[], V> = [...T, V];

type TuplifyUnion14521<T, L = LastOf14521<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14521<TuplifyUnion14521<Exclude<T, L>>, L>;

type DeepPartial14521<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14521<T[P]> }
  : T;

type Paths14521<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14521<K, Paths14521<T[K], Prev14521[D]>> : never }[keyof T]
  : never;

type Prev14521 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14521<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14521 {
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

type ConfigPaths14521 = Paths14521<NestedConfig14521>;

interface HeavyProps14521 {
  config: DeepPartial14521<NestedConfig14521>;
  path?: ConfigPaths14521;
}

const HeavyComponent14521 = memo(function HeavyComponent14521({ config }: HeavyProps14521) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14521) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14521 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14521: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14521.displayName = 'HeavyComponent14521';
export default HeavyComponent14521;
