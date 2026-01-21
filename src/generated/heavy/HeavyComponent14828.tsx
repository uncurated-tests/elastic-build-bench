'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14828<T> = T extends (infer U)[]
  ? DeepReadonlyArray14828<U>
  : T extends object
  ? DeepReadonlyObject14828<T>
  : T;

interface DeepReadonlyArray14828<T> extends ReadonlyArray<DeepReadonly14828<T>> {}

type DeepReadonlyObject14828<T> = {
  readonly [P in keyof T]: DeepReadonly14828<T[P]>;
};

type UnionToIntersection14828<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14828<T> = UnionToIntersection14828<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14828<T extends unknown[], V> = [...T, V];

type TuplifyUnion14828<T, L = LastOf14828<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14828<TuplifyUnion14828<Exclude<T, L>>, L>;

type DeepPartial14828<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14828<T[P]> }
  : T;

type Paths14828<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14828<K, Paths14828<T[K], Prev14828[D]>> : never }[keyof T]
  : never;

type Prev14828 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14828<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14828 {
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

type ConfigPaths14828 = Paths14828<NestedConfig14828>;

interface HeavyProps14828 {
  config: DeepPartial14828<NestedConfig14828>;
  path?: ConfigPaths14828;
}

const HeavyComponent14828 = memo(function HeavyComponent14828({ config }: HeavyProps14828) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14828) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14828 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14828: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14828.displayName = 'HeavyComponent14828';
export default HeavyComponent14828;
