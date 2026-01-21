'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14978<T> = T extends (infer U)[]
  ? DeepReadonlyArray14978<U>
  : T extends object
  ? DeepReadonlyObject14978<T>
  : T;

interface DeepReadonlyArray14978<T> extends ReadonlyArray<DeepReadonly14978<T>> {}

type DeepReadonlyObject14978<T> = {
  readonly [P in keyof T]: DeepReadonly14978<T[P]>;
};

type UnionToIntersection14978<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14978<T> = UnionToIntersection14978<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14978<T extends unknown[], V> = [...T, V];

type TuplifyUnion14978<T, L = LastOf14978<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14978<TuplifyUnion14978<Exclude<T, L>>, L>;

type DeepPartial14978<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14978<T[P]> }
  : T;

type Paths14978<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14978<K, Paths14978<T[K], Prev14978[D]>> : never }[keyof T]
  : never;

type Prev14978 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14978<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14978 {
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

type ConfigPaths14978 = Paths14978<NestedConfig14978>;

interface HeavyProps14978 {
  config: DeepPartial14978<NestedConfig14978>;
  path?: ConfigPaths14978;
}

const HeavyComponent14978 = memo(function HeavyComponent14978({ config }: HeavyProps14978) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14978) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14978 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14978: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14978.displayName = 'HeavyComponent14978';
export default HeavyComponent14978;
