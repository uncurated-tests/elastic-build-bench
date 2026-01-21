'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14549<T> = T extends (infer U)[]
  ? DeepReadonlyArray14549<U>
  : T extends object
  ? DeepReadonlyObject14549<T>
  : T;

interface DeepReadonlyArray14549<T> extends ReadonlyArray<DeepReadonly14549<T>> {}

type DeepReadonlyObject14549<T> = {
  readonly [P in keyof T]: DeepReadonly14549<T[P]>;
};

type UnionToIntersection14549<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14549<T> = UnionToIntersection14549<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14549<T extends unknown[], V> = [...T, V];

type TuplifyUnion14549<T, L = LastOf14549<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14549<TuplifyUnion14549<Exclude<T, L>>, L>;

type DeepPartial14549<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14549<T[P]> }
  : T;

type Paths14549<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14549<K, Paths14549<T[K], Prev14549[D]>> : never }[keyof T]
  : never;

type Prev14549 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14549<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14549 {
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

type ConfigPaths14549 = Paths14549<NestedConfig14549>;

interface HeavyProps14549 {
  config: DeepPartial14549<NestedConfig14549>;
  path?: ConfigPaths14549;
}

const HeavyComponent14549 = memo(function HeavyComponent14549({ config }: HeavyProps14549) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14549) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14549 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14549: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14549.displayName = 'HeavyComponent14549';
export default HeavyComponent14549;
