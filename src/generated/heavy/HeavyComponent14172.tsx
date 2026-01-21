'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14172<T> = T extends (infer U)[]
  ? DeepReadonlyArray14172<U>
  : T extends object
  ? DeepReadonlyObject14172<T>
  : T;

interface DeepReadonlyArray14172<T> extends ReadonlyArray<DeepReadonly14172<T>> {}

type DeepReadonlyObject14172<T> = {
  readonly [P in keyof T]: DeepReadonly14172<T[P]>;
};

type UnionToIntersection14172<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14172<T> = UnionToIntersection14172<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14172<T extends unknown[], V> = [...T, V];

type TuplifyUnion14172<T, L = LastOf14172<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14172<TuplifyUnion14172<Exclude<T, L>>, L>;

type DeepPartial14172<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14172<T[P]> }
  : T;

type Paths14172<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14172<K, Paths14172<T[K], Prev14172[D]>> : never }[keyof T]
  : never;

type Prev14172 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14172<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14172 {
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

type ConfigPaths14172 = Paths14172<NestedConfig14172>;

interface HeavyProps14172 {
  config: DeepPartial14172<NestedConfig14172>;
  path?: ConfigPaths14172;
}

const HeavyComponent14172 = memo(function HeavyComponent14172({ config }: HeavyProps14172) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14172) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14172 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14172: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14172.displayName = 'HeavyComponent14172';
export default HeavyComponent14172;
