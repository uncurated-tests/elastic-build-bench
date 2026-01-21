'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14049<T> = T extends (infer U)[]
  ? DeepReadonlyArray14049<U>
  : T extends object
  ? DeepReadonlyObject14049<T>
  : T;

interface DeepReadonlyArray14049<T> extends ReadonlyArray<DeepReadonly14049<T>> {}

type DeepReadonlyObject14049<T> = {
  readonly [P in keyof T]: DeepReadonly14049<T[P]>;
};

type UnionToIntersection14049<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14049<T> = UnionToIntersection14049<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14049<T extends unknown[], V> = [...T, V];

type TuplifyUnion14049<T, L = LastOf14049<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14049<TuplifyUnion14049<Exclude<T, L>>, L>;

type DeepPartial14049<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14049<T[P]> }
  : T;

type Paths14049<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14049<K, Paths14049<T[K], Prev14049[D]>> : never }[keyof T]
  : never;

type Prev14049 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14049<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14049 {
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

type ConfigPaths14049 = Paths14049<NestedConfig14049>;

interface HeavyProps14049 {
  config: DeepPartial14049<NestedConfig14049>;
  path?: ConfigPaths14049;
}

const HeavyComponent14049 = memo(function HeavyComponent14049({ config }: HeavyProps14049) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14049) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14049 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14049: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14049.displayName = 'HeavyComponent14049';
export default HeavyComponent14049;
