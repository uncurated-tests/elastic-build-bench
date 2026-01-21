'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14604<T> = T extends (infer U)[]
  ? DeepReadonlyArray14604<U>
  : T extends object
  ? DeepReadonlyObject14604<T>
  : T;

interface DeepReadonlyArray14604<T> extends ReadonlyArray<DeepReadonly14604<T>> {}

type DeepReadonlyObject14604<T> = {
  readonly [P in keyof T]: DeepReadonly14604<T[P]>;
};

type UnionToIntersection14604<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14604<T> = UnionToIntersection14604<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14604<T extends unknown[], V> = [...T, V];

type TuplifyUnion14604<T, L = LastOf14604<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14604<TuplifyUnion14604<Exclude<T, L>>, L>;

type DeepPartial14604<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14604<T[P]> }
  : T;

type Paths14604<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14604<K, Paths14604<T[K], Prev14604[D]>> : never }[keyof T]
  : never;

type Prev14604 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14604<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14604 {
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

type ConfigPaths14604 = Paths14604<NestedConfig14604>;

interface HeavyProps14604 {
  config: DeepPartial14604<NestedConfig14604>;
  path?: ConfigPaths14604;
}

const HeavyComponent14604 = memo(function HeavyComponent14604({ config }: HeavyProps14604) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14604) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14604 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14604: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14604.displayName = 'HeavyComponent14604';
export default HeavyComponent14604;
