'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14009<T> = T extends (infer U)[]
  ? DeepReadonlyArray14009<U>
  : T extends object
  ? DeepReadonlyObject14009<T>
  : T;

interface DeepReadonlyArray14009<T> extends ReadonlyArray<DeepReadonly14009<T>> {}

type DeepReadonlyObject14009<T> = {
  readonly [P in keyof T]: DeepReadonly14009<T[P]>;
};

type UnionToIntersection14009<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14009<T> = UnionToIntersection14009<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14009<T extends unknown[], V> = [...T, V];

type TuplifyUnion14009<T, L = LastOf14009<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14009<TuplifyUnion14009<Exclude<T, L>>, L>;

type DeepPartial14009<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14009<T[P]> }
  : T;

type Paths14009<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14009<K, Paths14009<T[K], Prev14009[D]>> : never }[keyof T]
  : never;

type Prev14009 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14009<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14009 {
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

type ConfigPaths14009 = Paths14009<NestedConfig14009>;

interface HeavyProps14009 {
  config: DeepPartial14009<NestedConfig14009>;
  path?: ConfigPaths14009;
}

const HeavyComponent14009 = memo(function HeavyComponent14009({ config }: HeavyProps14009) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14009) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14009 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14009: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14009.displayName = 'HeavyComponent14009';
export default HeavyComponent14009;
