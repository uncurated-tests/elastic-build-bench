'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14315<T> = T extends (infer U)[]
  ? DeepReadonlyArray14315<U>
  : T extends object
  ? DeepReadonlyObject14315<T>
  : T;

interface DeepReadonlyArray14315<T> extends ReadonlyArray<DeepReadonly14315<T>> {}

type DeepReadonlyObject14315<T> = {
  readonly [P in keyof T]: DeepReadonly14315<T[P]>;
};

type UnionToIntersection14315<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14315<T> = UnionToIntersection14315<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14315<T extends unknown[], V> = [...T, V];

type TuplifyUnion14315<T, L = LastOf14315<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14315<TuplifyUnion14315<Exclude<T, L>>, L>;

type DeepPartial14315<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14315<T[P]> }
  : T;

type Paths14315<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14315<K, Paths14315<T[K], Prev14315[D]>> : never }[keyof T]
  : never;

type Prev14315 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14315<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14315 {
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

type ConfigPaths14315 = Paths14315<NestedConfig14315>;

interface HeavyProps14315 {
  config: DeepPartial14315<NestedConfig14315>;
  path?: ConfigPaths14315;
}

const HeavyComponent14315 = memo(function HeavyComponent14315({ config }: HeavyProps14315) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14315) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14315 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14315: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14315.displayName = 'HeavyComponent14315';
export default HeavyComponent14315;
