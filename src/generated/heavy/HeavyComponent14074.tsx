'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14074<T> = T extends (infer U)[]
  ? DeepReadonlyArray14074<U>
  : T extends object
  ? DeepReadonlyObject14074<T>
  : T;

interface DeepReadonlyArray14074<T> extends ReadonlyArray<DeepReadonly14074<T>> {}

type DeepReadonlyObject14074<T> = {
  readonly [P in keyof T]: DeepReadonly14074<T[P]>;
};

type UnionToIntersection14074<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14074<T> = UnionToIntersection14074<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14074<T extends unknown[], V> = [...T, V];

type TuplifyUnion14074<T, L = LastOf14074<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14074<TuplifyUnion14074<Exclude<T, L>>, L>;

type DeepPartial14074<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14074<T[P]> }
  : T;

type Paths14074<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14074<K, Paths14074<T[K], Prev14074[D]>> : never }[keyof T]
  : never;

type Prev14074 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14074<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14074 {
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

type ConfigPaths14074 = Paths14074<NestedConfig14074>;

interface HeavyProps14074 {
  config: DeepPartial14074<NestedConfig14074>;
  path?: ConfigPaths14074;
}

const HeavyComponent14074 = memo(function HeavyComponent14074({ config }: HeavyProps14074) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14074) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14074 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14074: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14074.displayName = 'HeavyComponent14074';
export default HeavyComponent14074;
