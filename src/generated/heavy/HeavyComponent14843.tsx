'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14843<T> = T extends (infer U)[]
  ? DeepReadonlyArray14843<U>
  : T extends object
  ? DeepReadonlyObject14843<T>
  : T;

interface DeepReadonlyArray14843<T> extends ReadonlyArray<DeepReadonly14843<T>> {}

type DeepReadonlyObject14843<T> = {
  readonly [P in keyof T]: DeepReadonly14843<T[P]>;
};

type UnionToIntersection14843<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14843<T> = UnionToIntersection14843<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14843<T extends unknown[], V> = [...T, V];

type TuplifyUnion14843<T, L = LastOf14843<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14843<TuplifyUnion14843<Exclude<T, L>>, L>;

type DeepPartial14843<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14843<T[P]> }
  : T;

type Paths14843<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14843<K, Paths14843<T[K], Prev14843[D]>> : never }[keyof T]
  : never;

type Prev14843 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14843<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14843 {
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

type ConfigPaths14843 = Paths14843<NestedConfig14843>;

interface HeavyProps14843 {
  config: DeepPartial14843<NestedConfig14843>;
  path?: ConfigPaths14843;
}

const HeavyComponent14843 = memo(function HeavyComponent14843({ config }: HeavyProps14843) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14843) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14843 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14843: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14843.displayName = 'HeavyComponent14843';
export default HeavyComponent14843;
