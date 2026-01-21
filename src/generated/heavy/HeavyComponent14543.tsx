'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14543<T> = T extends (infer U)[]
  ? DeepReadonlyArray14543<U>
  : T extends object
  ? DeepReadonlyObject14543<T>
  : T;

interface DeepReadonlyArray14543<T> extends ReadonlyArray<DeepReadonly14543<T>> {}

type DeepReadonlyObject14543<T> = {
  readonly [P in keyof T]: DeepReadonly14543<T[P]>;
};

type UnionToIntersection14543<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14543<T> = UnionToIntersection14543<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14543<T extends unknown[], V> = [...T, V];

type TuplifyUnion14543<T, L = LastOf14543<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14543<TuplifyUnion14543<Exclude<T, L>>, L>;

type DeepPartial14543<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14543<T[P]> }
  : T;

type Paths14543<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14543<K, Paths14543<T[K], Prev14543[D]>> : never }[keyof T]
  : never;

type Prev14543 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14543<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14543 {
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

type ConfigPaths14543 = Paths14543<NestedConfig14543>;

interface HeavyProps14543 {
  config: DeepPartial14543<NestedConfig14543>;
  path?: ConfigPaths14543;
}

const HeavyComponent14543 = memo(function HeavyComponent14543({ config }: HeavyProps14543) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14543) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14543 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14543: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14543.displayName = 'HeavyComponent14543';
export default HeavyComponent14543;
