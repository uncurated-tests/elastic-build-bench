'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14845<T> = T extends (infer U)[]
  ? DeepReadonlyArray14845<U>
  : T extends object
  ? DeepReadonlyObject14845<T>
  : T;

interface DeepReadonlyArray14845<T> extends ReadonlyArray<DeepReadonly14845<T>> {}

type DeepReadonlyObject14845<T> = {
  readonly [P in keyof T]: DeepReadonly14845<T[P]>;
};

type UnionToIntersection14845<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14845<T> = UnionToIntersection14845<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14845<T extends unknown[], V> = [...T, V];

type TuplifyUnion14845<T, L = LastOf14845<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14845<TuplifyUnion14845<Exclude<T, L>>, L>;

type DeepPartial14845<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14845<T[P]> }
  : T;

type Paths14845<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14845<K, Paths14845<T[K], Prev14845[D]>> : never }[keyof T]
  : never;

type Prev14845 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14845<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14845 {
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

type ConfigPaths14845 = Paths14845<NestedConfig14845>;

interface HeavyProps14845 {
  config: DeepPartial14845<NestedConfig14845>;
  path?: ConfigPaths14845;
}

const HeavyComponent14845 = memo(function HeavyComponent14845({ config }: HeavyProps14845) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14845) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14845 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14845: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14845.displayName = 'HeavyComponent14845';
export default HeavyComponent14845;
