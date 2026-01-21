'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14643<T> = T extends (infer U)[]
  ? DeepReadonlyArray14643<U>
  : T extends object
  ? DeepReadonlyObject14643<T>
  : T;

interface DeepReadonlyArray14643<T> extends ReadonlyArray<DeepReadonly14643<T>> {}

type DeepReadonlyObject14643<T> = {
  readonly [P in keyof T]: DeepReadonly14643<T[P]>;
};

type UnionToIntersection14643<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14643<T> = UnionToIntersection14643<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14643<T extends unknown[], V> = [...T, V];

type TuplifyUnion14643<T, L = LastOf14643<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14643<TuplifyUnion14643<Exclude<T, L>>, L>;

type DeepPartial14643<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14643<T[P]> }
  : T;

type Paths14643<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14643<K, Paths14643<T[K], Prev14643[D]>> : never }[keyof T]
  : never;

type Prev14643 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14643<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14643 {
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

type ConfigPaths14643 = Paths14643<NestedConfig14643>;

interface HeavyProps14643 {
  config: DeepPartial14643<NestedConfig14643>;
  path?: ConfigPaths14643;
}

const HeavyComponent14643 = memo(function HeavyComponent14643({ config }: HeavyProps14643) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14643) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14643 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14643: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14643.displayName = 'HeavyComponent14643';
export default HeavyComponent14643;
