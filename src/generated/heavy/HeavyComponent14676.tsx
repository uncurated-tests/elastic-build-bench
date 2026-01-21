'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14676<T> = T extends (infer U)[]
  ? DeepReadonlyArray14676<U>
  : T extends object
  ? DeepReadonlyObject14676<T>
  : T;

interface DeepReadonlyArray14676<T> extends ReadonlyArray<DeepReadonly14676<T>> {}

type DeepReadonlyObject14676<T> = {
  readonly [P in keyof T]: DeepReadonly14676<T[P]>;
};

type UnionToIntersection14676<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14676<T> = UnionToIntersection14676<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14676<T extends unknown[], V> = [...T, V];

type TuplifyUnion14676<T, L = LastOf14676<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14676<TuplifyUnion14676<Exclude<T, L>>, L>;

type DeepPartial14676<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14676<T[P]> }
  : T;

type Paths14676<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14676<K, Paths14676<T[K], Prev14676[D]>> : never }[keyof T]
  : never;

type Prev14676 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14676<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14676 {
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

type ConfigPaths14676 = Paths14676<NestedConfig14676>;

interface HeavyProps14676 {
  config: DeepPartial14676<NestedConfig14676>;
  path?: ConfigPaths14676;
}

const HeavyComponent14676 = memo(function HeavyComponent14676({ config }: HeavyProps14676) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14676) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14676 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14676: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14676.displayName = 'HeavyComponent14676';
export default HeavyComponent14676;
