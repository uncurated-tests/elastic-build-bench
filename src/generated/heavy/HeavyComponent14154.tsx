'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14154<T> = T extends (infer U)[]
  ? DeepReadonlyArray14154<U>
  : T extends object
  ? DeepReadonlyObject14154<T>
  : T;

interface DeepReadonlyArray14154<T> extends ReadonlyArray<DeepReadonly14154<T>> {}

type DeepReadonlyObject14154<T> = {
  readonly [P in keyof T]: DeepReadonly14154<T[P]>;
};

type UnionToIntersection14154<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14154<T> = UnionToIntersection14154<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14154<T extends unknown[], V> = [...T, V];

type TuplifyUnion14154<T, L = LastOf14154<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14154<TuplifyUnion14154<Exclude<T, L>>, L>;

type DeepPartial14154<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14154<T[P]> }
  : T;

type Paths14154<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14154<K, Paths14154<T[K], Prev14154[D]>> : never }[keyof T]
  : never;

type Prev14154 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14154<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14154 {
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

type ConfigPaths14154 = Paths14154<NestedConfig14154>;

interface HeavyProps14154 {
  config: DeepPartial14154<NestedConfig14154>;
  path?: ConfigPaths14154;
}

const HeavyComponent14154 = memo(function HeavyComponent14154({ config }: HeavyProps14154) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14154) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14154 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14154: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14154.displayName = 'HeavyComponent14154';
export default HeavyComponent14154;
