'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14767<T> = T extends (infer U)[]
  ? DeepReadonlyArray14767<U>
  : T extends object
  ? DeepReadonlyObject14767<T>
  : T;

interface DeepReadonlyArray14767<T> extends ReadonlyArray<DeepReadonly14767<T>> {}

type DeepReadonlyObject14767<T> = {
  readonly [P in keyof T]: DeepReadonly14767<T[P]>;
};

type UnionToIntersection14767<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14767<T> = UnionToIntersection14767<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14767<T extends unknown[], V> = [...T, V];

type TuplifyUnion14767<T, L = LastOf14767<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14767<TuplifyUnion14767<Exclude<T, L>>, L>;

type DeepPartial14767<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14767<T[P]> }
  : T;

type Paths14767<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14767<K, Paths14767<T[K], Prev14767[D]>> : never }[keyof T]
  : never;

type Prev14767 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14767<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14767 {
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

type ConfigPaths14767 = Paths14767<NestedConfig14767>;

interface HeavyProps14767 {
  config: DeepPartial14767<NestedConfig14767>;
  path?: ConfigPaths14767;
}

const HeavyComponent14767 = memo(function HeavyComponent14767({ config }: HeavyProps14767) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14767) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14767 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14767: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14767.displayName = 'HeavyComponent14767';
export default HeavyComponent14767;
