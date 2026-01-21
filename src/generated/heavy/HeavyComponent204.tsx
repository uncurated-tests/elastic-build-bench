'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly204<T> = T extends (infer U)[]
  ? DeepReadonlyArray204<U>
  : T extends object
  ? DeepReadonlyObject204<T>
  : T;

interface DeepReadonlyArray204<T> extends ReadonlyArray<DeepReadonly204<T>> {}

type DeepReadonlyObject204<T> = {
  readonly [P in keyof T]: DeepReadonly204<T[P]>;
};

type UnionToIntersection204<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf204<T> = UnionToIntersection204<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push204<T extends unknown[], V> = [...T, V];

type TuplifyUnion204<T, L = LastOf204<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push204<TuplifyUnion204<Exclude<T, L>>, L>;

type DeepPartial204<T> = T extends object
  ? { [P in keyof T]?: DeepPartial204<T[P]> }
  : T;

type Paths204<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join204<K, Paths204<T[K], Prev204[D]>> : never }[keyof T]
  : never;

type Prev204 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join204<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig204 {
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

type ConfigPaths204 = Paths204<NestedConfig204>;

interface HeavyProps204 {
  config: DeepPartial204<NestedConfig204>;
  path?: ConfigPaths204;
}

const HeavyComponent204 = memo(function HeavyComponent204({ config }: HeavyProps204) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 204) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-204 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H204: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent204.displayName = 'HeavyComponent204';
export default HeavyComponent204;
