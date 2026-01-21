'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14143<T> = T extends (infer U)[]
  ? DeepReadonlyArray14143<U>
  : T extends object
  ? DeepReadonlyObject14143<T>
  : T;

interface DeepReadonlyArray14143<T> extends ReadonlyArray<DeepReadonly14143<T>> {}

type DeepReadonlyObject14143<T> = {
  readonly [P in keyof T]: DeepReadonly14143<T[P]>;
};

type UnionToIntersection14143<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14143<T> = UnionToIntersection14143<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14143<T extends unknown[], V> = [...T, V];

type TuplifyUnion14143<T, L = LastOf14143<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14143<TuplifyUnion14143<Exclude<T, L>>, L>;

type DeepPartial14143<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14143<T[P]> }
  : T;

type Paths14143<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14143<K, Paths14143<T[K], Prev14143[D]>> : never }[keyof T]
  : never;

type Prev14143 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14143<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14143 {
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

type ConfigPaths14143 = Paths14143<NestedConfig14143>;

interface HeavyProps14143 {
  config: DeepPartial14143<NestedConfig14143>;
  path?: ConfigPaths14143;
}

const HeavyComponent14143 = memo(function HeavyComponent14143({ config }: HeavyProps14143) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14143) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14143 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14143: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14143.displayName = 'HeavyComponent14143';
export default HeavyComponent14143;
