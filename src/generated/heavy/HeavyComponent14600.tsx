'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14600<T> = T extends (infer U)[]
  ? DeepReadonlyArray14600<U>
  : T extends object
  ? DeepReadonlyObject14600<T>
  : T;

interface DeepReadonlyArray14600<T> extends ReadonlyArray<DeepReadonly14600<T>> {}

type DeepReadonlyObject14600<T> = {
  readonly [P in keyof T]: DeepReadonly14600<T[P]>;
};

type UnionToIntersection14600<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14600<T> = UnionToIntersection14600<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14600<T extends unknown[], V> = [...T, V];

type TuplifyUnion14600<T, L = LastOf14600<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14600<TuplifyUnion14600<Exclude<T, L>>, L>;

type DeepPartial14600<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14600<T[P]> }
  : T;

type Paths14600<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14600<K, Paths14600<T[K], Prev14600[D]>> : never }[keyof T]
  : never;

type Prev14600 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14600<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14600 {
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

type ConfigPaths14600 = Paths14600<NestedConfig14600>;

interface HeavyProps14600 {
  config: DeepPartial14600<NestedConfig14600>;
  path?: ConfigPaths14600;
}

const HeavyComponent14600 = memo(function HeavyComponent14600({ config }: HeavyProps14600) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14600) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14600 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14600: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14600.displayName = 'HeavyComponent14600';
export default HeavyComponent14600;
