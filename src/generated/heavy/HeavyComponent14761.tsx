'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14761<T> = T extends (infer U)[]
  ? DeepReadonlyArray14761<U>
  : T extends object
  ? DeepReadonlyObject14761<T>
  : T;

interface DeepReadonlyArray14761<T> extends ReadonlyArray<DeepReadonly14761<T>> {}

type DeepReadonlyObject14761<T> = {
  readonly [P in keyof T]: DeepReadonly14761<T[P]>;
};

type UnionToIntersection14761<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14761<T> = UnionToIntersection14761<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14761<T extends unknown[], V> = [...T, V];

type TuplifyUnion14761<T, L = LastOf14761<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14761<TuplifyUnion14761<Exclude<T, L>>, L>;

type DeepPartial14761<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14761<T[P]> }
  : T;

type Paths14761<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14761<K, Paths14761<T[K], Prev14761[D]>> : never }[keyof T]
  : never;

type Prev14761 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14761<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14761 {
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

type ConfigPaths14761 = Paths14761<NestedConfig14761>;

interface HeavyProps14761 {
  config: DeepPartial14761<NestedConfig14761>;
  path?: ConfigPaths14761;
}

const HeavyComponent14761 = memo(function HeavyComponent14761({ config }: HeavyProps14761) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14761) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14761 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14761: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14761.displayName = 'HeavyComponent14761';
export default HeavyComponent14761;
