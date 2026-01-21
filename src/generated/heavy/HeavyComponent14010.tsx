'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14010<T> = T extends (infer U)[]
  ? DeepReadonlyArray14010<U>
  : T extends object
  ? DeepReadonlyObject14010<T>
  : T;

interface DeepReadonlyArray14010<T> extends ReadonlyArray<DeepReadonly14010<T>> {}

type DeepReadonlyObject14010<T> = {
  readonly [P in keyof T]: DeepReadonly14010<T[P]>;
};

type UnionToIntersection14010<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14010<T> = UnionToIntersection14010<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14010<T extends unknown[], V> = [...T, V];

type TuplifyUnion14010<T, L = LastOf14010<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14010<TuplifyUnion14010<Exclude<T, L>>, L>;

type DeepPartial14010<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14010<T[P]> }
  : T;

type Paths14010<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14010<K, Paths14010<T[K], Prev14010[D]>> : never }[keyof T]
  : never;

type Prev14010 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14010<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14010 {
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

type ConfigPaths14010 = Paths14010<NestedConfig14010>;

interface HeavyProps14010 {
  config: DeepPartial14010<NestedConfig14010>;
  path?: ConfigPaths14010;
}

const HeavyComponent14010 = memo(function HeavyComponent14010({ config }: HeavyProps14010) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14010) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14010 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14010: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14010.displayName = 'HeavyComponent14010';
export default HeavyComponent14010;
