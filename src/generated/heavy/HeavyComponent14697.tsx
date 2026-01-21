'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14697<T> = T extends (infer U)[]
  ? DeepReadonlyArray14697<U>
  : T extends object
  ? DeepReadonlyObject14697<T>
  : T;

interface DeepReadonlyArray14697<T> extends ReadonlyArray<DeepReadonly14697<T>> {}

type DeepReadonlyObject14697<T> = {
  readonly [P in keyof T]: DeepReadonly14697<T[P]>;
};

type UnionToIntersection14697<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14697<T> = UnionToIntersection14697<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14697<T extends unknown[], V> = [...T, V];

type TuplifyUnion14697<T, L = LastOf14697<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14697<TuplifyUnion14697<Exclude<T, L>>, L>;

type DeepPartial14697<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14697<T[P]> }
  : T;

type Paths14697<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14697<K, Paths14697<T[K], Prev14697[D]>> : never }[keyof T]
  : never;

type Prev14697 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14697<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14697 {
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

type ConfigPaths14697 = Paths14697<NestedConfig14697>;

interface HeavyProps14697 {
  config: DeepPartial14697<NestedConfig14697>;
  path?: ConfigPaths14697;
}

const HeavyComponent14697 = memo(function HeavyComponent14697({ config }: HeavyProps14697) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14697) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14697 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14697: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14697.displayName = 'HeavyComponent14697';
export default HeavyComponent14697;
