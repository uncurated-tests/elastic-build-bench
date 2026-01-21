'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14626<T> = T extends (infer U)[]
  ? DeepReadonlyArray14626<U>
  : T extends object
  ? DeepReadonlyObject14626<T>
  : T;

interface DeepReadonlyArray14626<T> extends ReadonlyArray<DeepReadonly14626<T>> {}

type DeepReadonlyObject14626<T> = {
  readonly [P in keyof T]: DeepReadonly14626<T[P]>;
};

type UnionToIntersection14626<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14626<T> = UnionToIntersection14626<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14626<T extends unknown[], V> = [...T, V];

type TuplifyUnion14626<T, L = LastOf14626<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14626<TuplifyUnion14626<Exclude<T, L>>, L>;

type DeepPartial14626<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14626<T[P]> }
  : T;

type Paths14626<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14626<K, Paths14626<T[K], Prev14626[D]>> : never }[keyof T]
  : never;

type Prev14626 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14626<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14626 {
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

type ConfigPaths14626 = Paths14626<NestedConfig14626>;

interface HeavyProps14626 {
  config: DeepPartial14626<NestedConfig14626>;
  path?: ConfigPaths14626;
}

const HeavyComponent14626 = memo(function HeavyComponent14626({ config }: HeavyProps14626) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14626) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14626 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14626: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14626.displayName = 'HeavyComponent14626';
export default HeavyComponent14626;
