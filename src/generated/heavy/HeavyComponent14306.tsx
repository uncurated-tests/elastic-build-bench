'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14306<T> = T extends (infer U)[]
  ? DeepReadonlyArray14306<U>
  : T extends object
  ? DeepReadonlyObject14306<T>
  : T;

interface DeepReadonlyArray14306<T> extends ReadonlyArray<DeepReadonly14306<T>> {}

type DeepReadonlyObject14306<T> = {
  readonly [P in keyof T]: DeepReadonly14306<T[P]>;
};

type UnionToIntersection14306<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14306<T> = UnionToIntersection14306<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14306<T extends unknown[], V> = [...T, V];

type TuplifyUnion14306<T, L = LastOf14306<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14306<TuplifyUnion14306<Exclude<T, L>>, L>;

type DeepPartial14306<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14306<T[P]> }
  : T;

type Paths14306<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14306<K, Paths14306<T[K], Prev14306[D]>> : never }[keyof T]
  : never;

type Prev14306 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14306<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14306 {
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

type ConfigPaths14306 = Paths14306<NestedConfig14306>;

interface HeavyProps14306 {
  config: DeepPartial14306<NestedConfig14306>;
  path?: ConfigPaths14306;
}

const HeavyComponent14306 = memo(function HeavyComponent14306({ config }: HeavyProps14306) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14306) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14306 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14306: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14306.displayName = 'HeavyComponent14306';
export default HeavyComponent14306;
