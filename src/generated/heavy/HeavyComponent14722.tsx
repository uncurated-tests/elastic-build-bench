'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14722<T> = T extends (infer U)[]
  ? DeepReadonlyArray14722<U>
  : T extends object
  ? DeepReadonlyObject14722<T>
  : T;

interface DeepReadonlyArray14722<T> extends ReadonlyArray<DeepReadonly14722<T>> {}

type DeepReadonlyObject14722<T> = {
  readonly [P in keyof T]: DeepReadonly14722<T[P]>;
};

type UnionToIntersection14722<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14722<T> = UnionToIntersection14722<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14722<T extends unknown[], V> = [...T, V];

type TuplifyUnion14722<T, L = LastOf14722<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14722<TuplifyUnion14722<Exclude<T, L>>, L>;

type DeepPartial14722<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14722<T[P]> }
  : T;

type Paths14722<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14722<K, Paths14722<T[K], Prev14722[D]>> : never }[keyof T]
  : never;

type Prev14722 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14722<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14722 {
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

type ConfigPaths14722 = Paths14722<NestedConfig14722>;

interface HeavyProps14722 {
  config: DeepPartial14722<NestedConfig14722>;
  path?: ConfigPaths14722;
}

const HeavyComponent14722 = memo(function HeavyComponent14722({ config }: HeavyProps14722) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14722) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14722 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14722: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14722.displayName = 'HeavyComponent14722';
export default HeavyComponent14722;
