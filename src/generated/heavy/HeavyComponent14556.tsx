'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14556<T> = T extends (infer U)[]
  ? DeepReadonlyArray14556<U>
  : T extends object
  ? DeepReadonlyObject14556<T>
  : T;

interface DeepReadonlyArray14556<T> extends ReadonlyArray<DeepReadonly14556<T>> {}

type DeepReadonlyObject14556<T> = {
  readonly [P in keyof T]: DeepReadonly14556<T[P]>;
};

type UnionToIntersection14556<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14556<T> = UnionToIntersection14556<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14556<T extends unknown[], V> = [...T, V];

type TuplifyUnion14556<T, L = LastOf14556<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14556<TuplifyUnion14556<Exclude<T, L>>, L>;

type DeepPartial14556<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14556<T[P]> }
  : T;

type Paths14556<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14556<K, Paths14556<T[K], Prev14556[D]>> : never }[keyof T]
  : never;

type Prev14556 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14556<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14556 {
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

type ConfigPaths14556 = Paths14556<NestedConfig14556>;

interface HeavyProps14556 {
  config: DeepPartial14556<NestedConfig14556>;
  path?: ConfigPaths14556;
}

const HeavyComponent14556 = memo(function HeavyComponent14556({ config }: HeavyProps14556) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14556) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14556 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14556: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14556.displayName = 'HeavyComponent14556';
export default HeavyComponent14556;
