'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14857<T> = T extends (infer U)[]
  ? DeepReadonlyArray14857<U>
  : T extends object
  ? DeepReadonlyObject14857<T>
  : T;

interface DeepReadonlyArray14857<T> extends ReadonlyArray<DeepReadonly14857<T>> {}

type DeepReadonlyObject14857<T> = {
  readonly [P in keyof T]: DeepReadonly14857<T[P]>;
};

type UnionToIntersection14857<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14857<T> = UnionToIntersection14857<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14857<T extends unknown[], V> = [...T, V];

type TuplifyUnion14857<T, L = LastOf14857<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14857<TuplifyUnion14857<Exclude<T, L>>, L>;

type DeepPartial14857<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14857<T[P]> }
  : T;

type Paths14857<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14857<K, Paths14857<T[K], Prev14857[D]>> : never }[keyof T]
  : never;

type Prev14857 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14857<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14857 {
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

type ConfigPaths14857 = Paths14857<NestedConfig14857>;

interface HeavyProps14857 {
  config: DeepPartial14857<NestedConfig14857>;
  path?: ConfigPaths14857;
}

const HeavyComponent14857 = memo(function HeavyComponent14857({ config }: HeavyProps14857) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14857) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14857 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14857: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14857.displayName = 'HeavyComponent14857';
export default HeavyComponent14857;
