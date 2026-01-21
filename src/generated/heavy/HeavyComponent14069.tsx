'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14069<T> = T extends (infer U)[]
  ? DeepReadonlyArray14069<U>
  : T extends object
  ? DeepReadonlyObject14069<T>
  : T;

interface DeepReadonlyArray14069<T> extends ReadonlyArray<DeepReadonly14069<T>> {}

type DeepReadonlyObject14069<T> = {
  readonly [P in keyof T]: DeepReadonly14069<T[P]>;
};

type UnionToIntersection14069<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14069<T> = UnionToIntersection14069<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14069<T extends unknown[], V> = [...T, V];

type TuplifyUnion14069<T, L = LastOf14069<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14069<TuplifyUnion14069<Exclude<T, L>>, L>;

type DeepPartial14069<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14069<T[P]> }
  : T;

type Paths14069<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14069<K, Paths14069<T[K], Prev14069[D]>> : never }[keyof T]
  : never;

type Prev14069 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14069<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14069 {
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

type ConfigPaths14069 = Paths14069<NestedConfig14069>;

interface HeavyProps14069 {
  config: DeepPartial14069<NestedConfig14069>;
  path?: ConfigPaths14069;
}

const HeavyComponent14069 = memo(function HeavyComponent14069({ config }: HeavyProps14069) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14069) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14069 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14069: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14069.displayName = 'HeavyComponent14069';
export default HeavyComponent14069;
