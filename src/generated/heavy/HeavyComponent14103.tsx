'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14103<T> = T extends (infer U)[]
  ? DeepReadonlyArray14103<U>
  : T extends object
  ? DeepReadonlyObject14103<T>
  : T;

interface DeepReadonlyArray14103<T> extends ReadonlyArray<DeepReadonly14103<T>> {}

type DeepReadonlyObject14103<T> = {
  readonly [P in keyof T]: DeepReadonly14103<T[P]>;
};

type UnionToIntersection14103<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14103<T> = UnionToIntersection14103<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14103<T extends unknown[], V> = [...T, V];

type TuplifyUnion14103<T, L = LastOf14103<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14103<TuplifyUnion14103<Exclude<T, L>>, L>;

type DeepPartial14103<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14103<T[P]> }
  : T;

type Paths14103<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14103<K, Paths14103<T[K], Prev14103[D]>> : never }[keyof T]
  : never;

type Prev14103 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14103<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14103 {
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

type ConfigPaths14103 = Paths14103<NestedConfig14103>;

interface HeavyProps14103 {
  config: DeepPartial14103<NestedConfig14103>;
  path?: ConfigPaths14103;
}

const HeavyComponent14103 = memo(function HeavyComponent14103({ config }: HeavyProps14103) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14103) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14103 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14103: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14103.displayName = 'HeavyComponent14103';
export default HeavyComponent14103;
