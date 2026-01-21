'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14266<T> = T extends (infer U)[]
  ? DeepReadonlyArray14266<U>
  : T extends object
  ? DeepReadonlyObject14266<T>
  : T;

interface DeepReadonlyArray14266<T> extends ReadonlyArray<DeepReadonly14266<T>> {}

type DeepReadonlyObject14266<T> = {
  readonly [P in keyof T]: DeepReadonly14266<T[P]>;
};

type UnionToIntersection14266<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14266<T> = UnionToIntersection14266<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14266<T extends unknown[], V> = [...T, V];

type TuplifyUnion14266<T, L = LastOf14266<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14266<TuplifyUnion14266<Exclude<T, L>>, L>;

type DeepPartial14266<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14266<T[P]> }
  : T;

type Paths14266<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14266<K, Paths14266<T[K], Prev14266[D]>> : never }[keyof T]
  : never;

type Prev14266 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14266<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14266 {
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

type ConfigPaths14266 = Paths14266<NestedConfig14266>;

interface HeavyProps14266 {
  config: DeepPartial14266<NestedConfig14266>;
  path?: ConfigPaths14266;
}

const HeavyComponent14266 = memo(function HeavyComponent14266({ config }: HeavyProps14266) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14266) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14266 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14266: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14266.displayName = 'HeavyComponent14266';
export default HeavyComponent14266;
