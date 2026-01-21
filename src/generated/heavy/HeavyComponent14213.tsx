'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14213<T> = T extends (infer U)[]
  ? DeepReadonlyArray14213<U>
  : T extends object
  ? DeepReadonlyObject14213<T>
  : T;

interface DeepReadonlyArray14213<T> extends ReadonlyArray<DeepReadonly14213<T>> {}

type DeepReadonlyObject14213<T> = {
  readonly [P in keyof T]: DeepReadonly14213<T[P]>;
};

type UnionToIntersection14213<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14213<T> = UnionToIntersection14213<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14213<T extends unknown[], V> = [...T, V];

type TuplifyUnion14213<T, L = LastOf14213<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14213<TuplifyUnion14213<Exclude<T, L>>, L>;

type DeepPartial14213<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14213<T[P]> }
  : T;

type Paths14213<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14213<K, Paths14213<T[K], Prev14213[D]>> : never }[keyof T]
  : never;

type Prev14213 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14213<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14213 {
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

type ConfigPaths14213 = Paths14213<NestedConfig14213>;

interface HeavyProps14213 {
  config: DeepPartial14213<NestedConfig14213>;
  path?: ConfigPaths14213;
}

const HeavyComponent14213 = memo(function HeavyComponent14213({ config }: HeavyProps14213) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14213) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14213 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14213: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14213.displayName = 'HeavyComponent14213';
export default HeavyComponent14213;
