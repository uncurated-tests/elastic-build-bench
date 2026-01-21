'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14958<T> = T extends (infer U)[]
  ? DeepReadonlyArray14958<U>
  : T extends object
  ? DeepReadonlyObject14958<T>
  : T;

interface DeepReadonlyArray14958<T> extends ReadonlyArray<DeepReadonly14958<T>> {}

type DeepReadonlyObject14958<T> = {
  readonly [P in keyof T]: DeepReadonly14958<T[P]>;
};

type UnionToIntersection14958<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14958<T> = UnionToIntersection14958<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14958<T extends unknown[], V> = [...T, V];

type TuplifyUnion14958<T, L = LastOf14958<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14958<TuplifyUnion14958<Exclude<T, L>>, L>;

type DeepPartial14958<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14958<T[P]> }
  : T;

type Paths14958<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14958<K, Paths14958<T[K], Prev14958[D]>> : never }[keyof T]
  : never;

type Prev14958 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14958<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14958 {
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

type ConfigPaths14958 = Paths14958<NestedConfig14958>;

interface HeavyProps14958 {
  config: DeepPartial14958<NestedConfig14958>;
  path?: ConfigPaths14958;
}

const HeavyComponent14958 = memo(function HeavyComponent14958({ config }: HeavyProps14958) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14958) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14958 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14958: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14958.displayName = 'HeavyComponent14958';
export default HeavyComponent14958;
