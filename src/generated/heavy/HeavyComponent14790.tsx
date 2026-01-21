'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14790<T> = T extends (infer U)[]
  ? DeepReadonlyArray14790<U>
  : T extends object
  ? DeepReadonlyObject14790<T>
  : T;

interface DeepReadonlyArray14790<T> extends ReadonlyArray<DeepReadonly14790<T>> {}

type DeepReadonlyObject14790<T> = {
  readonly [P in keyof T]: DeepReadonly14790<T[P]>;
};

type UnionToIntersection14790<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14790<T> = UnionToIntersection14790<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14790<T extends unknown[], V> = [...T, V];

type TuplifyUnion14790<T, L = LastOf14790<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14790<TuplifyUnion14790<Exclude<T, L>>, L>;

type DeepPartial14790<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14790<T[P]> }
  : T;

type Paths14790<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14790<K, Paths14790<T[K], Prev14790[D]>> : never }[keyof T]
  : never;

type Prev14790 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14790<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14790 {
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

type ConfigPaths14790 = Paths14790<NestedConfig14790>;

interface HeavyProps14790 {
  config: DeepPartial14790<NestedConfig14790>;
  path?: ConfigPaths14790;
}

const HeavyComponent14790 = memo(function HeavyComponent14790({ config }: HeavyProps14790) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14790) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14790 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14790: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14790.displayName = 'HeavyComponent14790';
export default HeavyComponent14790;
