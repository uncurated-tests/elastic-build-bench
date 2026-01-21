'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14912<T> = T extends (infer U)[]
  ? DeepReadonlyArray14912<U>
  : T extends object
  ? DeepReadonlyObject14912<T>
  : T;

interface DeepReadonlyArray14912<T> extends ReadonlyArray<DeepReadonly14912<T>> {}

type DeepReadonlyObject14912<T> = {
  readonly [P in keyof T]: DeepReadonly14912<T[P]>;
};

type UnionToIntersection14912<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14912<T> = UnionToIntersection14912<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14912<T extends unknown[], V> = [...T, V];

type TuplifyUnion14912<T, L = LastOf14912<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14912<TuplifyUnion14912<Exclude<T, L>>, L>;

type DeepPartial14912<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14912<T[P]> }
  : T;

type Paths14912<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14912<K, Paths14912<T[K], Prev14912[D]>> : never }[keyof T]
  : never;

type Prev14912 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14912<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14912 {
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

type ConfigPaths14912 = Paths14912<NestedConfig14912>;

interface HeavyProps14912 {
  config: DeepPartial14912<NestedConfig14912>;
  path?: ConfigPaths14912;
}

const HeavyComponent14912 = memo(function HeavyComponent14912({ config }: HeavyProps14912) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14912) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14912 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14912: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14912.displayName = 'HeavyComponent14912';
export default HeavyComponent14912;
