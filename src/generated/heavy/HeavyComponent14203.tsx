'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14203<T> = T extends (infer U)[]
  ? DeepReadonlyArray14203<U>
  : T extends object
  ? DeepReadonlyObject14203<T>
  : T;

interface DeepReadonlyArray14203<T> extends ReadonlyArray<DeepReadonly14203<T>> {}

type DeepReadonlyObject14203<T> = {
  readonly [P in keyof T]: DeepReadonly14203<T[P]>;
};

type UnionToIntersection14203<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14203<T> = UnionToIntersection14203<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14203<T extends unknown[], V> = [...T, V];

type TuplifyUnion14203<T, L = LastOf14203<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14203<TuplifyUnion14203<Exclude<T, L>>, L>;

type DeepPartial14203<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14203<T[P]> }
  : T;

type Paths14203<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14203<K, Paths14203<T[K], Prev14203[D]>> : never }[keyof T]
  : never;

type Prev14203 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14203<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14203 {
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

type ConfigPaths14203 = Paths14203<NestedConfig14203>;

interface HeavyProps14203 {
  config: DeepPartial14203<NestedConfig14203>;
  path?: ConfigPaths14203;
}

const HeavyComponent14203 = memo(function HeavyComponent14203({ config }: HeavyProps14203) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14203) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14203 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14203: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14203.displayName = 'HeavyComponent14203';
export default HeavyComponent14203;
