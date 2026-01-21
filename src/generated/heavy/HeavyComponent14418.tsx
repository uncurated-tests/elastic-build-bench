'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14418<T> = T extends (infer U)[]
  ? DeepReadonlyArray14418<U>
  : T extends object
  ? DeepReadonlyObject14418<T>
  : T;

interface DeepReadonlyArray14418<T> extends ReadonlyArray<DeepReadonly14418<T>> {}

type DeepReadonlyObject14418<T> = {
  readonly [P in keyof T]: DeepReadonly14418<T[P]>;
};

type UnionToIntersection14418<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14418<T> = UnionToIntersection14418<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14418<T extends unknown[], V> = [...T, V];

type TuplifyUnion14418<T, L = LastOf14418<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14418<TuplifyUnion14418<Exclude<T, L>>, L>;

type DeepPartial14418<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14418<T[P]> }
  : T;

type Paths14418<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14418<K, Paths14418<T[K], Prev14418[D]>> : never }[keyof T]
  : never;

type Prev14418 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14418<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14418 {
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

type ConfigPaths14418 = Paths14418<NestedConfig14418>;

interface HeavyProps14418 {
  config: DeepPartial14418<NestedConfig14418>;
  path?: ConfigPaths14418;
}

const HeavyComponent14418 = memo(function HeavyComponent14418({ config }: HeavyProps14418) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14418) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14418 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14418: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14418.displayName = 'HeavyComponent14418';
export default HeavyComponent14418;
