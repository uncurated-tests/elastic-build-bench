'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14923<T> = T extends (infer U)[]
  ? DeepReadonlyArray14923<U>
  : T extends object
  ? DeepReadonlyObject14923<T>
  : T;

interface DeepReadonlyArray14923<T> extends ReadonlyArray<DeepReadonly14923<T>> {}

type DeepReadonlyObject14923<T> = {
  readonly [P in keyof T]: DeepReadonly14923<T[P]>;
};

type UnionToIntersection14923<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14923<T> = UnionToIntersection14923<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14923<T extends unknown[], V> = [...T, V];

type TuplifyUnion14923<T, L = LastOf14923<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14923<TuplifyUnion14923<Exclude<T, L>>, L>;

type DeepPartial14923<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14923<T[P]> }
  : T;

type Paths14923<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14923<K, Paths14923<T[K], Prev14923[D]>> : never }[keyof T]
  : never;

type Prev14923 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14923<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14923 {
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

type ConfigPaths14923 = Paths14923<NestedConfig14923>;

interface HeavyProps14923 {
  config: DeepPartial14923<NestedConfig14923>;
  path?: ConfigPaths14923;
}

const HeavyComponent14923 = memo(function HeavyComponent14923({ config }: HeavyProps14923) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14923) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14923 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14923: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14923.displayName = 'HeavyComponent14923';
export default HeavyComponent14923;
