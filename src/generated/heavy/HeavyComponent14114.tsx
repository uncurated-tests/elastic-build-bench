'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14114<T> = T extends (infer U)[]
  ? DeepReadonlyArray14114<U>
  : T extends object
  ? DeepReadonlyObject14114<T>
  : T;

interface DeepReadonlyArray14114<T> extends ReadonlyArray<DeepReadonly14114<T>> {}

type DeepReadonlyObject14114<T> = {
  readonly [P in keyof T]: DeepReadonly14114<T[P]>;
};

type UnionToIntersection14114<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14114<T> = UnionToIntersection14114<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14114<T extends unknown[], V> = [...T, V];

type TuplifyUnion14114<T, L = LastOf14114<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14114<TuplifyUnion14114<Exclude<T, L>>, L>;

type DeepPartial14114<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14114<T[P]> }
  : T;

type Paths14114<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14114<K, Paths14114<T[K], Prev14114[D]>> : never }[keyof T]
  : never;

type Prev14114 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14114<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14114 {
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

type ConfigPaths14114 = Paths14114<NestedConfig14114>;

interface HeavyProps14114 {
  config: DeepPartial14114<NestedConfig14114>;
  path?: ConfigPaths14114;
}

const HeavyComponent14114 = memo(function HeavyComponent14114({ config }: HeavyProps14114) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14114) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14114 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14114: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14114.displayName = 'HeavyComponent14114';
export default HeavyComponent14114;
