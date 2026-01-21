'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14610<T> = T extends (infer U)[]
  ? DeepReadonlyArray14610<U>
  : T extends object
  ? DeepReadonlyObject14610<T>
  : T;

interface DeepReadonlyArray14610<T> extends ReadonlyArray<DeepReadonly14610<T>> {}

type DeepReadonlyObject14610<T> = {
  readonly [P in keyof T]: DeepReadonly14610<T[P]>;
};

type UnionToIntersection14610<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14610<T> = UnionToIntersection14610<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14610<T extends unknown[], V> = [...T, V];

type TuplifyUnion14610<T, L = LastOf14610<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14610<TuplifyUnion14610<Exclude<T, L>>, L>;

type DeepPartial14610<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14610<T[P]> }
  : T;

type Paths14610<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14610<K, Paths14610<T[K], Prev14610[D]>> : never }[keyof T]
  : never;

type Prev14610 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14610<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14610 {
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

type ConfigPaths14610 = Paths14610<NestedConfig14610>;

interface HeavyProps14610 {
  config: DeepPartial14610<NestedConfig14610>;
  path?: ConfigPaths14610;
}

const HeavyComponent14610 = memo(function HeavyComponent14610({ config }: HeavyProps14610) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14610) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14610 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14610: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14610.displayName = 'HeavyComponent14610';
export default HeavyComponent14610;
