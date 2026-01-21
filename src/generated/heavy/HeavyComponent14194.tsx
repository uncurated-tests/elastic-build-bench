'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14194<T> = T extends (infer U)[]
  ? DeepReadonlyArray14194<U>
  : T extends object
  ? DeepReadonlyObject14194<T>
  : T;

interface DeepReadonlyArray14194<T> extends ReadonlyArray<DeepReadonly14194<T>> {}

type DeepReadonlyObject14194<T> = {
  readonly [P in keyof T]: DeepReadonly14194<T[P]>;
};

type UnionToIntersection14194<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14194<T> = UnionToIntersection14194<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14194<T extends unknown[], V> = [...T, V];

type TuplifyUnion14194<T, L = LastOf14194<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14194<TuplifyUnion14194<Exclude<T, L>>, L>;

type DeepPartial14194<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14194<T[P]> }
  : T;

type Paths14194<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14194<K, Paths14194<T[K], Prev14194[D]>> : never }[keyof T]
  : never;

type Prev14194 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14194<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14194 {
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

type ConfigPaths14194 = Paths14194<NestedConfig14194>;

interface HeavyProps14194 {
  config: DeepPartial14194<NestedConfig14194>;
  path?: ConfigPaths14194;
}

const HeavyComponent14194 = memo(function HeavyComponent14194({ config }: HeavyProps14194) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14194) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14194 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14194: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14194.displayName = 'HeavyComponent14194';
export default HeavyComponent14194;
