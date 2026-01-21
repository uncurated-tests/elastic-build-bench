'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14367<T> = T extends (infer U)[]
  ? DeepReadonlyArray14367<U>
  : T extends object
  ? DeepReadonlyObject14367<T>
  : T;

interface DeepReadonlyArray14367<T> extends ReadonlyArray<DeepReadonly14367<T>> {}

type DeepReadonlyObject14367<T> = {
  readonly [P in keyof T]: DeepReadonly14367<T[P]>;
};

type UnionToIntersection14367<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14367<T> = UnionToIntersection14367<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14367<T extends unknown[], V> = [...T, V];

type TuplifyUnion14367<T, L = LastOf14367<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14367<TuplifyUnion14367<Exclude<T, L>>, L>;

type DeepPartial14367<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14367<T[P]> }
  : T;

type Paths14367<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14367<K, Paths14367<T[K], Prev14367[D]>> : never }[keyof T]
  : never;

type Prev14367 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14367<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14367 {
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

type ConfigPaths14367 = Paths14367<NestedConfig14367>;

interface HeavyProps14367 {
  config: DeepPartial14367<NestedConfig14367>;
  path?: ConfigPaths14367;
}

const HeavyComponent14367 = memo(function HeavyComponent14367({ config }: HeavyProps14367) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14367) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14367 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14367: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14367.displayName = 'HeavyComponent14367';
export default HeavyComponent14367;
