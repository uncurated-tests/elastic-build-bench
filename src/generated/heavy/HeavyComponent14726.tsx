'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14726<T> = T extends (infer U)[]
  ? DeepReadonlyArray14726<U>
  : T extends object
  ? DeepReadonlyObject14726<T>
  : T;

interface DeepReadonlyArray14726<T> extends ReadonlyArray<DeepReadonly14726<T>> {}

type DeepReadonlyObject14726<T> = {
  readonly [P in keyof T]: DeepReadonly14726<T[P]>;
};

type UnionToIntersection14726<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14726<T> = UnionToIntersection14726<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14726<T extends unknown[], V> = [...T, V];

type TuplifyUnion14726<T, L = LastOf14726<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14726<TuplifyUnion14726<Exclude<T, L>>, L>;

type DeepPartial14726<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14726<T[P]> }
  : T;

type Paths14726<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14726<K, Paths14726<T[K], Prev14726[D]>> : never }[keyof T]
  : never;

type Prev14726 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14726<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14726 {
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

type ConfigPaths14726 = Paths14726<NestedConfig14726>;

interface HeavyProps14726 {
  config: DeepPartial14726<NestedConfig14726>;
  path?: ConfigPaths14726;
}

const HeavyComponent14726 = memo(function HeavyComponent14726({ config }: HeavyProps14726) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14726) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14726 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14726: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14726.displayName = 'HeavyComponent14726';
export default HeavyComponent14726;
