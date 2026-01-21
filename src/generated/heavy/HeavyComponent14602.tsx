'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14602<T> = T extends (infer U)[]
  ? DeepReadonlyArray14602<U>
  : T extends object
  ? DeepReadonlyObject14602<T>
  : T;

interface DeepReadonlyArray14602<T> extends ReadonlyArray<DeepReadonly14602<T>> {}

type DeepReadonlyObject14602<T> = {
  readonly [P in keyof T]: DeepReadonly14602<T[P]>;
};

type UnionToIntersection14602<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14602<T> = UnionToIntersection14602<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14602<T extends unknown[], V> = [...T, V];

type TuplifyUnion14602<T, L = LastOf14602<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14602<TuplifyUnion14602<Exclude<T, L>>, L>;

type DeepPartial14602<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14602<T[P]> }
  : T;

type Paths14602<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14602<K, Paths14602<T[K], Prev14602[D]>> : never }[keyof T]
  : never;

type Prev14602 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14602<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14602 {
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

type ConfigPaths14602 = Paths14602<NestedConfig14602>;

interface HeavyProps14602 {
  config: DeepPartial14602<NestedConfig14602>;
  path?: ConfigPaths14602;
}

const HeavyComponent14602 = memo(function HeavyComponent14602({ config }: HeavyProps14602) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14602) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14602 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14602: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14602.displayName = 'HeavyComponent14602';
export default HeavyComponent14602;
