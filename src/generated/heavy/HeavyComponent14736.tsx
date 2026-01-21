'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14736<T> = T extends (infer U)[]
  ? DeepReadonlyArray14736<U>
  : T extends object
  ? DeepReadonlyObject14736<T>
  : T;

interface DeepReadonlyArray14736<T> extends ReadonlyArray<DeepReadonly14736<T>> {}

type DeepReadonlyObject14736<T> = {
  readonly [P in keyof T]: DeepReadonly14736<T[P]>;
};

type UnionToIntersection14736<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14736<T> = UnionToIntersection14736<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14736<T extends unknown[], V> = [...T, V];

type TuplifyUnion14736<T, L = LastOf14736<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14736<TuplifyUnion14736<Exclude<T, L>>, L>;

type DeepPartial14736<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14736<T[P]> }
  : T;

type Paths14736<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14736<K, Paths14736<T[K], Prev14736[D]>> : never }[keyof T]
  : never;

type Prev14736 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14736<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14736 {
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

type ConfigPaths14736 = Paths14736<NestedConfig14736>;

interface HeavyProps14736 {
  config: DeepPartial14736<NestedConfig14736>;
  path?: ConfigPaths14736;
}

const HeavyComponent14736 = memo(function HeavyComponent14736({ config }: HeavyProps14736) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14736) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14736 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14736: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14736.displayName = 'HeavyComponent14736';
export default HeavyComponent14736;
