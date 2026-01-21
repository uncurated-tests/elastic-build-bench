'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14784<T> = T extends (infer U)[]
  ? DeepReadonlyArray14784<U>
  : T extends object
  ? DeepReadonlyObject14784<T>
  : T;

interface DeepReadonlyArray14784<T> extends ReadonlyArray<DeepReadonly14784<T>> {}

type DeepReadonlyObject14784<T> = {
  readonly [P in keyof T]: DeepReadonly14784<T[P]>;
};

type UnionToIntersection14784<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14784<T> = UnionToIntersection14784<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14784<T extends unknown[], V> = [...T, V];

type TuplifyUnion14784<T, L = LastOf14784<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14784<TuplifyUnion14784<Exclude<T, L>>, L>;

type DeepPartial14784<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14784<T[P]> }
  : T;

type Paths14784<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14784<K, Paths14784<T[K], Prev14784[D]>> : never }[keyof T]
  : never;

type Prev14784 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14784<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14784 {
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

type ConfigPaths14784 = Paths14784<NestedConfig14784>;

interface HeavyProps14784 {
  config: DeepPartial14784<NestedConfig14784>;
  path?: ConfigPaths14784;
}

const HeavyComponent14784 = memo(function HeavyComponent14784({ config }: HeavyProps14784) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14784) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14784 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14784: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14784.displayName = 'HeavyComponent14784';
export default HeavyComponent14784;
