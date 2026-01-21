'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14917<T> = T extends (infer U)[]
  ? DeepReadonlyArray14917<U>
  : T extends object
  ? DeepReadonlyObject14917<T>
  : T;

interface DeepReadonlyArray14917<T> extends ReadonlyArray<DeepReadonly14917<T>> {}

type DeepReadonlyObject14917<T> = {
  readonly [P in keyof T]: DeepReadonly14917<T[P]>;
};

type UnionToIntersection14917<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14917<T> = UnionToIntersection14917<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14917<T extends unknown[], V> = [...T, V];

type TuplifyUnion14917<T, L = LastOf14917<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14917<TuplifyUnion14917<Exclude<T, L>>, L>;

type DeepPartial14917<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14917<T[P]> }
  : T;

type Paths14917<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14917<K, Paths14917<T[K], Prev14917[D]>> : never }[keyof T]
  : never;

type Prev14917 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14917<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14917 {
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

type ConfigPaths14917 = Paths14917<NestedConfig14917>;

interface HeavyProps14917 {
  config: DeepPartial14917<NestedConfig14917>;
  path?: ConfigPaths14917;
}

const HeavyComponent14917 = memo(function HeavyComponent14917({ config }: HeavyProps14917) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14917) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14917 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14917: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14917.displayName = 'HeavyComponent14917';
export default HeavyComponent14917;
