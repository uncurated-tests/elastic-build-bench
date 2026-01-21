'use client';
import React, { memo, useMemo } from 'react';

// Complex recursive type definitions to increase TypeScript compilation time
type DeepReadonly14966<T> = T extends (infer U)[]
  ? DeepReadonlyArray14966<U>
  : T extends object
  ? DeepReadonlyObject14966<T>
  : T;

interface DeepReadonlyArray14966<T> extends ReadonlyArray<DeepReadonly14966<T>> {}

type DeepReadonlyObject14966<T> = {
  readonly [P in keyof T]: DeepReadonly14966<T[P]>;
};

type UnionToIntersection14966<U> = (U extends unknown ? (k: U) => void : never) extends (k: infer I) => void ? I : never;

type LastOf14966<T> = UnionToIntersection14966<T extends unknown ? () => T : never> extends () => infer R ? R : never;

type Push14966<T extends unknown[], V> = [...T, V];

type TuplifyUnion14966<T, L = LastOf14966<T>, N = [T] extends [never] ? true : false> = true extends N
  ? []
  : Push14966<TuplifyUnion14966<Exclude<T, L>>, L>;

type DeepPartial14966<T> = T extends object
  ? { [P in keyof T]?: DeepPartial14966<T[P]> }
  : T;

type Paths14966<T, D extends number = 10> = [D] extends [never]
  ? never
  : T extends object
  ? { [K in keyof T]-?: K extends string | number ? `${K}` | Join14966<K, Paths14966<T[K], Prev14966[D]>> : never }[keyof T]
  : never;

type Prev14966 = [never, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

type Join14966<K, P> = K extends string | number
  ? P extends string | number
    ? `${K}.${P}`
    : never
  : never;

interface NestedConfig14966 {
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

type ConfigPaths14966 = Paths14966<NestedConfig14966>;

interface HeavyProps14966 {
  config: DeepPartial14966<NestedConfig14966>;
  path?: ConfigPaths14966;
}

const HeavyComponent14966 = memo(function HeavyComponent14966({ config }: HeavyProps14966) {
  const computed = useMemo(() => {
    const depth = JSON.stringify(config || {}).length;
    return Math.sin(depth * 14966) * Math.cos(depth);
  }, [config]);

  return (
    <div className="heavy-14966 p-1 text-xs bg-zinc-100 dark:bg-zinc-800 rounded">
      <span>H14966: {computed.toFixed(2)}</span>
    </div>
  );
});

HeavyComponent14966.displayName = 'HeavyComponent14966';
export default HeavyComponent14966;
