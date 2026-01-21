'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14387<T> = T extends (infer U)[]
  ? DeepReadonlyArray14387<U>
  : T extends object
  ? DeepReadonlyObject14387<T>
  : T;

interface DeepReadonlyArray14387<T> extends ReadonlyArray<DeepReadonly14387<T>> {}

type DeepReadonlyObject14387<T> = {
  readonly [P in keyof T]: DeepReadonly14387<T[P]>;
};

type UnionToIntersection14387<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14387<T> = UnionToIntersection14387<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14387<T extends unknown[], V> = [...T, V];

type TuplifyUnion14387<T, L = LastOf14387<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14387<TuplifyUnion14387<Exclude<T, L>>, L>;

type DeepPartial14387<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14387<T[P]> }
  : T;

type Paths14387<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14387<K, Paths14387<T[K], Prev14387[D]>> : never }[keyof T]
  : never;

type Prev14387 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14387<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14387 {
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

type ConfigPaths14387 = Paths14387<NestedConfig14387>;

interface HeavyProps14387 {
  config: DeepPartial14387<NestedConfig14387>;
  path?: ConfigPaths14387;
}

const HeavyComponent14387 = memo(function HeavyComponent14387({ config }: HeavyProps14387) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14387) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14387 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14387: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14387.displayName = 'HeavyComponent14387';
export default HeavyComponent14387;
