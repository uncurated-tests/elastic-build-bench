'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14011<T> = T extends (infer U)[]
  ? DeepReadonlyArray14011<U>
  : T extends object
  ? DeepReadonlyObject14011<T>
  : T;

interface DeepReadonlyArray14011<T> extends ReadonlyArray<DeepReadonly14011<T>> {}

type DeepReadonlyObject14011<T> = {
  readonly [P in keyof T]: DeepReadonly14011<T[P]>;
};

type UnionToIntersection14011<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14011<T> = UnionToIntersection14011<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14011<T extends unknown[], V> = [...T, V];

type TuplifyUnion14011<T, L = LastOf14011<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14011<TuplifyUnion14011<Exclude<T, L>>, L>;

type DeepPartial14011<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14011<T[P]> }
  : T;

type Paths14011<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14011<K, Paths14011<T[K], Prev14011[D]>> : never }[keyof T]
  : never;

type Prev14011 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14011<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14011 {
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

type ConfigPaths14011 = Paths14011<NestedConfig14011>;

interface HeavyProps14011 {
  config: DeepPartial14011<NestedConfig14011>;
  path?: ConfigPaths14011;
}

const HeavyComponent14011 = memo(function HeavyComponent14011({ config }: HeavyProps14011) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14011) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14011 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14011: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14011.displayName = 'HeavyComponent14011';
export default HeavyComponent14011;
