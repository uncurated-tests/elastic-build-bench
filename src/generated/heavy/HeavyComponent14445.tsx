'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14445<T> = T extends (infer U)[]
  ? DeepReadonlyArray14445<U>
  : T extends object
  ? DeepReadonlyObject14445<T>
  : T;

interface DeepReadonlyArray14445<T> extends ReadonlyArray<DeepReadonly14445<T>> {}

type DeepReadonlyObject14445<T> = {
  readonly [P in keyof T]: DeepReadonly14445<T[P]>;
};

type UnionToIntersection14445<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14445<T> = UnionToIntersection14445<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14445<T extends unknown[], V> = [...T, V];

type TuplifyUnion14445<T, L = LastOf14445<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14445<TuplifyUnion14445<Exclude<T, L>>, L>;

type DeepPartial14445<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14445<T[P]> }
  : T;

type Paths14445<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14445<K, Paths14445<T[K], Prev14445[D]>> : never }[keyof T]
  : never;

type Prev14445 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14445<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14445 {
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

type ConfigPaths14445 = Paths14445<NestedConfig14445>;

interface HeavyProps14445 {
  config: DeepPartial14445<NestedConfig14445>;
  path?: ConfigPaths14445;
}

const HeavyComponent14445 = memo(function HeavyComponent14445({ config }: HeavyProps14445) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14445) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14445 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14445: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14445.displayName = 'HeavyComponent14445';
export default HeavyComponent14445;
