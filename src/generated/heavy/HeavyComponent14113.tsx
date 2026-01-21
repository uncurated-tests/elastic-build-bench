'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14113<T> = T extends (infer U)[]
  ? DeepReadonlyArray14113<U>
  : T extends object
  ? DeepReadonlyObject14113<T>
  : T;

interface DeepReadonlyArray14113<T> extends ReadonlyArray<DeepReadonly14113<T>> {}

type DeepReadonlyObject14113<T> = {
  readonly [P in keyof T]: DeepReadonly14113<T[P]>;
};

type UnionToIntersection14113<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14113<T> = UnionToIntersection14113<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14113<T extends unknown[], V> = [...T, V];

type TuplifyUnion14113<T, L = LastOf14113<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14113<TuplifyUnion14113<Exclude<T, L>>, L>;

type DeepPartial14113<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14113<T[P]> }
  : T;

type Paths14113<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14113<K, Paths14113<T[K], Prev14113[D]>> : never }[keyof T]
  : never;

type Prev14113 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14113<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14113 {
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

type ConfigPaths14113 = Paths14113<NestedConfig14113>;

interface HeavyProps14113 {
  config: DeepPartial14113<NestedConfig14113>;
  path?: ConfigPaths14113;
}

const HeavyComponent14113 = memo(function HeavyComponent14113({ config }: HeavyProps14113) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14113) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14113 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14113: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14113.displayName = 'HeavyComponent14113';
export default HeavyComponent14113;
