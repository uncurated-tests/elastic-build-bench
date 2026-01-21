'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14394<T> = T extends (infer U)[]
  ? DeepReadonlyArray14394<U>
  : T extends object
  ? DeepReadonlyObject14394<T>
  : T;

interface DeepReadonlyArray14394<T> extends ReadonlyArray<DeepReadonly14394<T>> {}

type DeepReadonlyObject14394<T> = {
  readonly [P in keyof T]: DeepReadonly14394<T[P]>;
};

type UnionToIntersection14394<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14394<T> = UnionToIntersection14394<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14394<T extends unknown[], V> = [...T, V];

type TuplifyUnion14394<T, L = LastOf14394<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14394<TuplifyUnion14394<Exclude<T, L>>, L>;

type DeepPartial14394<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14394<T[P]> }
  : T;

type Paths14394<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14394<K, Paths14394<T[K], Prev14394[D]>> : never }[keyof T]
  : never;

type Prev14394 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14394<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14394 {
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

type ConfigPaths14394 = Paths14394<NestedConfig14394>;

interface HeavyProps14394 {
  config: DeepPartial14394<NestedConfig14394>;
  path?: ConfigPaths14394;
}

const HeavyComponent14394 = memo(function HeavyComponent14394({ config }: HeavyProps14394) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14394) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14394 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14394: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14394.displayName = 'HeavyComponent14394';
export default HeavyComponent14394;
