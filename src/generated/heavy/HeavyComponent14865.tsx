'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14865<T> = T extends (infer U)[]
  ? DeepReadonlyArray14865<U>
  : T extends object
  ? DeepReadonlyObject14865<T>
  : T;

interface DeepReadonlyArray14865<T> extends ReadonlyArray<DeepReadonly14865<T>> {}

type DeepReadonlyObject14865<T> = {
  readonly [P in keyof T]: DeepReadonly14865<T[P]>;
};

type UnionToIntersection14865<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14865<T> = UnionToIntersection14865<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14865<T extends unknown[], V> = [...T, V];

type TuplifyUnion14865<T, L = LastOf14865<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14865<TuplifyUnion14865<Exclude<T, L>>, L>;

type DeepPartial14865<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14865<T[P]> }
  : T;

type Paths14865<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14865<K, Paths14865<T[K], Prev14865[D]>> : never }[keyof T]
  : never;

type Prev14865 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14865<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14865 {
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

type ConfigPaths14865 = Paths14865<NestedConfig14865>;

interface HeavyProps14865 {
  config: DeepPartial14865<NestedConfig14865>;
  path?: ConfigPaths14865;
}

const HeavyComponent14865 = memo(function HeavyComponent14865({ config }: HeavyProps14865) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14865) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14865 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14865: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14865.displayName = 'HeavyComponent14865';
export default HeavyComponent14865;
