'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14852<T> = T extends (infer U)[]
  ? DeepReadonlyArray14852<U>
  : T extends object
  ? DeepReadonlyObject14852<T>
  : T;

interface DeepReadonlyArray14852<T> extends ReadonlyArray<DeepReadonly14852<T>> {}

type DeepReadonlyObject14852<T> = {
  readonly [P in keyof T]: DeepReadonly14852<T[P]>;
};

type UnionToIntersection14852<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14852<T> = UnionToIntersection14852<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14852<T extends unknown[], V> = [...T, V];

type TuplifyUnion14852<T, L = LastOf14852<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14852<TuplifyUnion14852<Exclude<T, L>>, L>;

type DeepPartial14852<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14852<T[P]> }
  : T;

type Paths14852<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14852<K, Paths14852<T[K], Prev14852[D]>> : never }[keyof T]
  : never;

type Prev14852 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14852<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14852 {
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

type ConfigPaths14852 = Paths14852<NestedConfig14852>;

interface HeavyProps14852 {
  config: DeepPartial14852<NestedConfig14852>;
  path?: ConfigPaths14852;
}

const HeavyComponent14852 = memo(function HeavyComponent14852({ config }: HeavyProps14852) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14852) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14852 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14852: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14852.displayName = 'HeavyComponent14852';
export default HeavyComponent14852;
