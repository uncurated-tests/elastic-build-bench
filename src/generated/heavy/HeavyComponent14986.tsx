'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14986<T> = T extends (infer U)[]
  ? DeepReadonlyArray14986<U>
  : T extends object
  ? DeepReadonlyObject14986<T>
  : T;

interface DeepReadonlyArray14986<T> extends ReadonlyArray<DeepReadonly14986<T>> {}

type DeepReadonlyObject14986<T> = {
  readonly [P in keyof T]: DeepReadonly14986<T[P]>;
};

type UnionToIntersection14986<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14986<T> = UnionToIntersection14986<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14986<T extends unknown[], V> = [...T, V];

type TuplifyUnion14986<T, L = LastOf14986<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14986<TuplifyUnion14986<Exclude<T, L>>, L>;

type DeepPartial14986<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14986<T[P]> }
  : T;

type Paths14986<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14986<K, Paths14986<T[K], Prev14986[D]>> : never }[keyof T]
  : never;

type Prev14986 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14986<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14986 {
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

type ConfigPaths14986 = Paths14986<NestedConfig14986>;

interface HeavyProps14986 {
  config: DeepPartial14986<NestedConfig14986>;
  path?: ConfigPaths14986;
}

const HeavyComponent14986 = memo(function HeavyComponent14986({ config }: HeavyProps14986) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14986) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14986 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14986: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14986.displayName = 'HeavyComponent14986';
export default HeavyComponent14986;
