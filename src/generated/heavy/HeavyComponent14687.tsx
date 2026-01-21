'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14687<T> = T extends (infer U)[]
  ? DeepReadonlyArray14687<U>
  : T extends object
  ? DeepReadonlyObject14687<T>
  : T;

interface DeepReadonlyArray14687<T> extends ReadonlyArray<DeepReadonly14687<T>> {}

type DeepReadonlyObject14687<T> = {
  readonly [P in keyof T]: DeepReadonly14687<T[P]>;
};

type UnionToIntersection14687<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14687<T> = UnionToIntersection14687<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14687<T extends unknown[], V> = [...T, V];

type TuplifyUnion14687<T, L = LastOf14687<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14687<TuplifyUnion14687<Exclude<T, L>>, L>;

type DeepPartial14687<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14687<T[P]> }
  : T;

type Paths14687<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14687<K, Paths14687<T[K], Prev14687[D]>> : never }[keyof T]
  : never;

type Prev14687 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14687<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14687 {
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

type ConfigPaths14687 = Paths14687<NestedConfig14687>;

interface HeavyProps14687 {
  config: DeepPartial14687<NestedConfig14687>;
  path?: ConfigPaths14687;
}

const HeavyComponent14687 = memo(function HeavyComponent14687({ config }: HeavyProps14687) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14687) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14687 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14687: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14687.displayName = 'HeavyComponent14687';
export default HeavyComponent14687;
