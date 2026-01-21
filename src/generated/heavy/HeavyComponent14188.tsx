'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14188<T> = T extends (infer U)[]
  ? DeepReadonlyArray14188<U>
  : T extends object
  ? DeepReadonlyObject14188<T>
  : T;

interface DeepReadonlyArray14188<T> extends ReadonlyArray<DeepReadonly14188<T>> {}

type DeepReadonlyObject14188<T> = {
  readonly [P in keyof T]: DeepReadonly14188<T[P]>;
};

type UnionToIntersection14188<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14188<T> = UnionToIntersection14188<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14188<T extends unknown[], V> = [...T, V];

type TuplifyUnion14188<T, L = LastOf14188<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14188<TuplifyUnion14188<Exclude<T, L>>, L>;

type DeepPartial14188<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14188<T[P]> }
  : T;

type Paths14188<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14188<K, Paths14188<T[K], Prev14188[D]>> : never }[keyof T]
  : never;

type Prev14188 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14188<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14188 {
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

type ConfigPaths14188 = Paths14188<NestedConfig14188>;

interface HeavyProps14188 {
  config: DeepPartial14188<NestedConfig14188>;
  path?: ConfigPaths14188;
}

const HeavyComponent14188 = memo(function HeavyComponent14188({ config }: HeavyProps14188) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14188) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14188 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14188: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14188.displayName = 'HeavyComponent14188';
export default HeavyComponent14188;
