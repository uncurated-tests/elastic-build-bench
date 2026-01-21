'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14745<T> = T extends (infer U)[]
  ? DeepReadonlyArray14745<U>
  : T extends object
  ? DeepReadonlyObject14745<T>
  : T;

interface DeepReadonlyArray14745<T> extends ReadonlyArray<DeepReadonly14745<T>> {}

type DeepReadonlyObject14745<T> = {
  readonly [P in keyof T]: DeepReadonly14745<T[P]>;
};

type UnionToIntersection14745<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14745<T> = UnionToIntersection14745<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14745<T extends unknown[], V> = [...T, V];

type TuplifyUnion14745<T, L = LastOf14745<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14745<TuplifyUnion14745<Exclude<T, L>>, L>;

type DeepPartial14745<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14745<T[P]> }
  : T;

type Paths14745<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14745<K, Paths14745<T[K], Prev14745[D]>> : never }[keyof T]
  : never;

type Prev14745 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14745<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14745 {
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

type ConfigPaths14745 = Paths14745<NestedConfig14745>;

interface HeavyProps14745 {
  config: DeepPartial14745<NestedConfig14745>;
  path?: ConfigPaths14745;
}

const HeavyComponent14745 = memo(function HeavyComponent14745({ config }: HeavyProps14745) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14745) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14745 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14745: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14745.displayName = 'HeavyComponent14745';
export default HeavyComponent14745;
