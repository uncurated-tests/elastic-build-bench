'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14862<T> = T extends (infer U)[]
  ? DeepReadonlyArray14862<U>
  : T extends object
  ? DeepReadonlyObject14862<T>
  : T;

interface DeepReadonlyArray14862<T> extends ReadonlyArray<DeepReadonly14862<T>> {}

type DeepReadonlyObject14862<T> = {
  readonly [P in keyof T]: DeepReadonly14862<T[P]>;
};

type UnionToIntersection14862<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14862<T> = UnionToIntersection14862<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14862<T extends unknown[], V> = [...T, V];

type TuplifyUnion14862<T, L = LastOf14862<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14862<TuplifyUnion14862<Exclude<T, L>>, L>;

type DeepPartial14862<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14862<T[P]> }
  : T;

type Paths14862<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14862<K, Paths14862<T[K], Prev14862[D]>> : never }[keyof T]
  : never;

type Prev14862 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14862<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14862 {
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

type ConfigPaths14862 = Paths14862<NestedConfig14862>;

interface HeavyProps14862 {
  config: DeepPartial14862<NestedConfig14862>;
  path?: ConfigPaths14862;
}

const HeavyComponent14862 = memo(function HeavyComponent14862({ config }: HeavyProps14862) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14862) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14862 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14862: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14862.displayName = 'HeavyComponent14862';
export default HeavyComponent14862;
