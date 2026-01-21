'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14427<T> = T extends (infer U)[]
  ? DeepReadonlyArray14427<U>
  : T extends object
  ? DeepReadonlyObject14427<T>
  : T;

interface DeepReadonlyArray14427<T> extends ReadonlyArray<DeepReadonly14427<T>> {}

type DeepReadonlyObject14427<T> = {
  readonly [P in keyof T]: DeepReadonly14427<T[P]>;
};

type UnionToIntersection14427<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14427<T> = UnionToIntersection14427<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14427<T extends unknown[], V> = [...T, V];

type TuplifyUnion14427<T, L = LastOf14427<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14427<TuplifyUnion14427<Exclude<T, L>>, L>;

type DeepPartial14427<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14427<T[P]> }
  : T;

type Paths14427<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14427<K, Paths14427<T[K], Prev14427[D]>> : never }[keyof T]
  : never;

type Prev14427 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14427<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14427 {
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

type ConfigPaths14427 = Paths14427<NestedConfig14427>;

interface HeavyProps14427 {
  config: DeepPartial14427<NestedConfig14427>;
  path?: ConfigPaths14427;
}

const HeavyComponent14427 = memo(function HeavyComponent14427({ config }: HeavyProps14427) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14427) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14427 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14427: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14427.displayName = 'HeavyComponent14427';
export default HeavyComponent14427;
