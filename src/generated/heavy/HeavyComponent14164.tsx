'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14164<T> = T extends (infer U)[]
  ? DeepReadonlyArray14164<U>
  : T extends object
  ? DeepReadonlyObject14164<T>
  : T;

interface DeepReadonlyArray14164<T> extends ReadonlyArray<DeepReadonly14164<T>> {}

type DeepReadonlyObject14164<T> = {
  readonly [P in keyof T]: DeepReadonly14164<T[P]>;
};

type UnionToIntersection14164<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14164<T> = UnionToIntersection14164<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14164<T extends unknown[], V> = [...T, V];

type TuplifyUnion14164<T, L = LastOf14164<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14164<TuplifyUnion14164<Exclude<T, L>>, L>;

type DeepPartial14164<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14164<T[P]> }
  : T;

type Paths14164<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14164<K, Paths14164<T[K], Prev14164[D]>> : never }[keyof T]
  : never;

type Prev14164 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14164<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14164 {
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

type ConfigPaths14164 = Paths14164<NestedConfig14164>;

interface HeavyProps14164 {
  config: DeepPartial14164<NestedConfig14164>;
  path?: ConfigPaths14164;
}

const HeavyComponent14164 = memo(function HeavyComponent14164({ config }: HeavyProps14164) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14164) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14164 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14164: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14164.displayName = 'HeavyComponent14164';
export default HeavyComponent14164;
