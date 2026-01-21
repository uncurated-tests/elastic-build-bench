'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14235<T> = T extends (infer U)[]
  ? DeepReadonlyArray14235<U>
  : T extends object
  ? DeepReadonlyObject14235<T>
  : T;

interface DeepReadonlyArray14235<T> extends ReadonlyArray<DeepReadonly14235<T>> {}

type DeepReadonlyObject14235<T> = {
  readonly [P in keyof T]: DeepReadonly14235<T[P]>;
};

type UnionToIntersection14235<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14235<T> = UnionToIntersection14235<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14235<T extends unknown[], V> = [...T, V];

type TuplifyUnion14235<T, L = LastOf14235<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14235<TuplifyUnion14235<Exclude<T, L>>, L>;

type DeepPartial14235<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14235<T[P]> }
  : T;

type Paths14235<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14235<K, Paths14235<T[K], Prev14235[D]>> : never }[keyof T]
  : never;

type Prev14235 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14235<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14235 {
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

type ConfigPaths14235 = Paths14235<NestedConfig14235>;

interface HeavyProps14235 {
  config: DeepPartial14235<NestedConfig14235>;
  path?: ConfigPaths14235;
}

const HeavyComponent14235 = memo(function HeavyComponent14235({ config }: HeavyProps14235) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14235) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14235 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14235: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14235.displayName = 'HeavyComponent14235';
export default HeavyComponent14235;
