'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14111<T> = T extends (infer U)[]
  ? DeepReadonlyArray14111<U>
  : T extends object
  ? DeepReadonlyObject14111<T>
  : T;

interface DeepReadonlyArray14111<T> extends ReadonlyArray<DeepReadonly14111<T>> {}

type DeepReadonlyObject14111<T> = {
  readonly [P in keyof T]: DeepReadonly14111<T[P]>;
};

type UnionToIntersection14111<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14111<T> = UnionToIntersection14111<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14111<T extends unknown[], V> = [...T, V];

type TuplifyUnion14111<T, L = LastOf14111<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14111<TuplifyUnion14111<Exclude<T, L>>, L>;

type DeepPartial14111<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14111<T[P]> }
  : T;

type Paths14111<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14111<K, Paths14111<T[K], Prev14111[D]>> : never }[keyof T]
  : never;

type Prev14111 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14111<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14111 {
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

type ConfigPaths14111 = Paths14111<NestedConfig14111>;

interface HeavyProps14111 {
  config: DeepPartial14111<NestedConfig14111>;
  path?: ConfigPaths14111;
}

const HeavyComponent14111 = memo(function HeavyComponent14111({ config }: HeavyProps14111) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14111) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14111 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14111: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14111.displayName = 'HeavyComponent14111';
export default HeavyComponent14111;
